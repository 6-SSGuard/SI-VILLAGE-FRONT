// import { DetailProductImageDataType } from '@/types/detail/detailProductImageList';

// export const fetchDataRevaliDateTime = async <T>(
//   url: string,
//   revalidateTime: number
// ): Promise<T> => {
//   const res = await fetch(url, {
//     method: 'GET',
//     next: { revalidate: 3600 * revalidateTime }, // 캐싱 설정
//   });

//   if (!res.ok) {
//     throw new Error(`Failed to fetch data from ${url}`);
//   }

//   const data = (await res.json()) as DetailProductImageDataType;
//   return console.log('api 불러오기에 성공 했습니다');
// };
