import { useState } from "react";

export const useLocalStorage = (
  keyName: string,
  defaultValue: Record<string, unknown> | undefined
) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value);
      } else {
        if (defaultValue) {
          window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        }
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });

  function setValue(newValue: Record<string, unknown>) {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {
      throw err as Error;
    }
    setStoredValue(newValue);
  }

  return [storedValue, setValue];
};
