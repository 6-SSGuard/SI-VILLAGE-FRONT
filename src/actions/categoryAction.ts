'use server';
import { fetchData, fetchDataNoCache } from '@/components/hooks/fetchDataHook';
import { topCategoryType } from '@/types/category/categoryType';

export async function getTopCategories(): Promise<topCategoryType[]> {
  return fetchData<topCategoryType[]>(
    `${process.env.API_BASE_URL}/api/category/sub-categories?parentCategoryCode=top`
  );
}

export async function getMiddleCategories(
  categoryCode: string
): Promise<topCategoryType[]> {
  return fetchDataNoCache<topCategoryType[]>(
    `${process.env.API_BASE_URL}/api/category/sub-categories?parentCategoryCode=${categoryCode}`
  );
}
