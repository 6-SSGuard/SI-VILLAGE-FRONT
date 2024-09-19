import { fetchData, fetchDataNoCache } from '@/components/hooks/fetchDataHook';
import {
  CategorySideProps,
  middleCategoryType,
  topCategoryType,
} from '@/types/category/categoryType';

export async function getTopCategories(): Promise<CategorySideProps> {
  'use server';
  return fetchData<CategorySideProps>(
    `${process.env.API_BASE_URL}/api/category/top`
  );
}

export async function getMiddleCategories(
  categoryName: string
): Promise<middleCategoryType[]> {
  'use server';
  return fetchDataNoCache<middleCategoryType[]>(
    `${process.env.API_BASE_URL}/api/v1/category/middle-categories/${categoryName}`
  );
}
