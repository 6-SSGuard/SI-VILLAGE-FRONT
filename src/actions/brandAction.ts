'use server';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { fetchData } from '@/components/hooks/fetchDataHook';
import { getServerSession } from 'next-auth';

export interface BrandDataType {
  brandId: number;
  brandEngName: string;
  brandKorName: string;
  brandIndexLetter: string;
  brandIndexLetterKor: string;
  liked: boolean;
}

/**
 * 브랜드 조회
 * @remarks
 * GET 요청을 '/api/brand/ids' 엔드포인트에 보냅니다. 성공시 메시지와 result를 반환합니다. * @returns {Promise<authResponse>}
 */
export async function getBrand(): Promise<[BrandDataType]> {
  const session = await getServerSession(options);
  return fetchData<[BrandDataType]>(
    `${process.env.API_BASE_URL}/api/brand/ids`,
    session?.user.accessToken
  );
}

// 브랜드 토글
export async function toggleBrandItem(brandId: number) {
  'use server';
  try {
    const session = await getServerSession(options);
    const response = await fetch(
      `${process.env.API_BASE_URL}/api/brand-like/member/${brandId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session?.user.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to toggle cart item');
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error toggling cart item:', error);
    throw error;
  }
}
