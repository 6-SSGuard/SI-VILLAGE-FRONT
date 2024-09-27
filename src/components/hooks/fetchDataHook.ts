import { commonResType } from '@/types/auth/authType';

export const fetchDataRevaliDateTime = async <T>(
  url: string,
  revalidateTime: number
): Promise<T> => {
  const res = await fetch(url, {
    method: 'GET',
    next: { revalidate: 3600 * revalidateTime }, // 캐싱 설정
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }

  const data = (await res.json()) as commonResType<T>;
  return data.result;
};

export const fetchDataNoCache = async <T>(url: string): Promise<T> => {
  const res = await fetch(url, {
    method: 'GET',
    cache: 'no-cache',
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }

  const data = (await res.json()) as commonResType<T>;
  return data.result;
};

export const fetchDataRevaliDateTags = async <T>(
  url: string,
  tagList: string[]
): Promise<T> => {
  const res = await fetch(url, {
    method: 'GET',
    next: { tags: tagList }, // 캐싱 설정
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }

  const data = (await res.json()) as commonResType<T>;
  return data.result;
};

export const fetchData = async <T>(url: string, token?: string): Promise<T> => {
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });

  // if (!res.ok) {
  //   throw new Error(`Failed to fetch data from ${url}`);
  // }

  const data = (await res.json()) as commonResType<T>;

  return data.result;
};
