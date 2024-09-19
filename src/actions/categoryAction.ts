'use server';
import { fetchData, fetchDataNoCache } from '@/components/hooks/fetchDataHook';
import { CategorySideProps } from '@/types/category/categoryType';

export async function getTopCategories(): Promise<CategorySideProps> {
  return fetchData<CategorySideProps>(
    `${process.env.API_BASE_URL}/api/category/top`
  );
}

export async function getMiddleCategories(
  categoryCode: string
): Promise<CategorySideProps> {
  return fetchDataNoCache<CategorySideProps>(
    `${process.env.API_BASE_URL}/api/category/${categoryCode}`
  );
}
