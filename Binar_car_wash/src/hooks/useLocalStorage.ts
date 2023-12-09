// export function set(key: string, value: string) {
//   window.localStorage.setItem(key, value);
// }
// export function get<T>(key: string): T {
//   const val = window.localStorage.getItem(key);
//   return val as T;

// }
import { useState } from "react";

export const useLocalStorage = (
  keyName: string,
  defaultValue: Record<string, unknown>
) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
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
