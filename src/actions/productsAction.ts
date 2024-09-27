'use server';

import { fetchDataNoCache } from '@/components/hooks/fetchDataHook';
import { cursorDataType, pageType } from '@/types/product/productsType';

/**
 * 물품 생성
 * @remarks
 * POST 요청을 '/api/product/' 엔드포인트에 보냅니다. 성공시 메시지와 result를 반환합니다.
 * @param {productRequest}
 * @returns {Promise<authResponse>} "Success." 메시지와 함께 을 반환합니다.
 *  */

export const getProductListByCategory = async (
  topCategoryCode?: string | null,
  middleCategoryCode?: string | null,
  bottomCategoryCode?: string | null,
  subCategoryCode?: string | null,
  lastValue?: string | null,
  pageSize?: number | null,
  sort?: string | null
): Promise<cursorDataType> => {
  'use server';

  const params = new URLSearchParams();

  // 파라미터가 존재할 경우에만 추가
  if (topCategoryCode)
    params.append('topCategoryCode', decodeURIComponent(topCategoryCode));
  if (middleCategoryCode)
    params.append('middleCategoryCode', decodeURIComponent(middleCategoryCode));
  if (bottomCategoryCode)
    params.append('bottomCategoryCode', decodeURIComponent(bottomCategoryCode));
  if (subCategoryCode)
    params.append('subCategoryCode', decodeURIComponent(subCategoryCode));
  if (lastValue) params.append('lastValue', String(lastValue));
  if (pageSize) params.append('pageSize', String(pageSize));
  if (sort) {
    params.append('sort', String(sort));
  }

  const fetchUrl = `${process.env.API_BASE_URL}/api/product-category-list?${params.toString()}`;

  console.log('fetchUrl', fetchUrl);
  return fetchDataNoCache<cursorDataType>(fetchUrl);
};
