const BACKEND_URL = import.meta.env["VITE_BACKEND_URL"];

export async function httpFetch<TResponse>(
  path: string,
  withToken: boolean = false,
  searchParams?: Record<string, unknown>,
  options?: RequestInit
): Promise<TResponse> {
  const url = new URL(`${BACKEND_URL}/${path}`);
  for (const key in searchParams) {
    url.searchParams.append(key, String(searchParams[key]));
  }

  const headers: HeadersInit = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  if (withToken) {
    const str = window.localStorage.getItem("auth");
    if (!str) throw new Error("Auth token not found!");
    const auth = JSON.parse(str);
    headers["Authorization"] = `Bearer ${auth.token}`;
  }

  const res = await fetch(url, {
    headers,
    ...options,
  });

  if (res.ok) {
    return await res.json();
  } else {
    throw new Error(await res.json());
  }
}
