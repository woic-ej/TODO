import { DOMAIN } from "@/app/_constants/domain";

type Fetch = typeof fetch;

const API_BASE_URL = DOMAIN ?? "";
const TENANT_ID = "woic";

const makeHeader = async (body: any) => {
  const headers: HeadersInit = {};

  // FormData의 경우 Content-Type을 설정할 필요가 없으므로, 빈 헤더를 반환합니다.
  if (body instanceof FormData) {
    return { headers, body };
  }

  // JSON을 보낼 경우 Content-Type을 application/json으로 설정합니다.
  if (body) {
    return {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
  }

  return { headers };
};

const fetchJSON = async (...params: Parameters<Fetch>) => {
  try {
    const wrappedFetch = async () => {
      const [url, init] = params;
      const { headers, body } = await makeHeader(init?.body);
      const fullInit = { ...init, headers, body };
      const response = await fetch(
        `${API_BASE_URL}/${TENANT_ID}/${url}`,
        fullInit
      );
      return response.json();
    };
    return await wrappedFetch();
  } catch (error) {
    console.error(error);
  }
};

const request = async (
  method: string,
  path: string,
  body?: any,
  init?: RequestInit
) => {
  return await fetchJSON(path, { ...init, method, body });
};

export const getData = (path: string, init?: RequestInit) =>
  request("GET", path, undefined, init);
export const postData = (path: string, body: any, init?: RequestInit) =>
  request("POST", path, body, init);
export const patchData = (path: string, body: any, init?: RequestInit) =>
  request("PATCH", path, body, init);
export const deleteData = (path: string, body?: any, init?: RequestInit) =>
  request("DELETE", path, body, init);
