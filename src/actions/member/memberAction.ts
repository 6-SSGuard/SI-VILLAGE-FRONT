'use server';

import { authResponse } from '@/types/auth/authType';

/**
 * 상품 리스트에 대한 Uuid 조회
 * @remarks
 * GET 요청을 '/api/member/products/uuid' 엔드포인트에 보냅니다. 성공시 메시지와 result를 반환합니다.
 * @returns {Promise<authResponse>} "Success." 메시지와 함께 을 반환합니다.
 * "result": {
    "productsUuidList": [
      {
        "productUuid": "string"
      }
    ]
  }
 *  */

export async function getProductUuid() {
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/member/products/uuid`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  console.log(res);
  if (res.ok) {
    return await res.json();
  }
  return null;
}

/**
 * 단일 상품에 대한 간략 정보 조회
 * @remarks
 * GET 요청을 '/api/member/products/breif/${productUuid}' 엔드포인트에 보냅니다. 성공시 메시지와 result를 반환합니다.
 * @param {string} productUuid 상세 정보를 가져오려는 상품의 ID
 * @returns {Promise<authResponse>} "Success." 메시지와 함께 을 반환합니다.
 * "result": {
    "productUuid": "string",
    "brandEngName": "string",
    "productName": "string",
    "price": 0,
    "productThumbnailUrl": "string",
    "liked": true
  }
 *  */

export async function getProduct(productUuid: string) {
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/member/products/breif/${productUuid}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  console.log(res);
  if (res.ok) {
    return await res.json();
  }
  return null;
}

/**
 * 상품 상세 정보 조회
 * @remarks
 * GET 요청을 '/api/member/detail/${productUuid}' 엔드포인트에 보냅니다. 성공시 메시지와 result를 반환합니다.
 * @param {string} productUuid 상세 정보를 가져오려는 상품의 ID
 * @returns {Promise<authResponse>} "Success." 메시지와 함께 을 반환합니다.
 * "result": {
    "productUuid": "string",
    "productName": "string",
    "price": 0,
    "brandEngName": "string",
    "brandKorName": "string",
    "color": "string",
    "size": "string",
    "capacity": "string",
    "stock": 0,
    "likesCount": 0,
    "productImageUrls": [
      "string"
    ],
    "liked": true
  }
 *  */

export async function getProductDetail(productUuid: string) {
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/member/detail/${productUuid}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  console.log(res);
  if (res.ok) {
    return await res.json();
  }
  return null;
}

/**
 * 브랜도 목록 조회
 * @remarks
 * GET 요청을 '/api/member/' 엔드포인트에 보냅니다. 성공시 메시지와 result를 반환합니다.
 * @returns {Promise<authResponse>} "Success." 메시지와 함께 을 반환합니다.
 *  "brands": [
      {
        "brandId": 0,
        "brandEngName": "string",
        "brandKorName": "string",
        "liked": true
      }
    ]
 *  */

export async function getBrand(productUuid: string) {
  const res = await fetch(`${process.env.API_BASE_URL}/api/member/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  console.log(res);
  if (res.ok) {
    return await res.json();
  }
  return null;
}

/**
 * 상품 좋아요 버튼
 * @remarks
 * PUT 요청을 '/api/member/product/like/{productUuid}' 엔드포인트에 보냅니다. 성공시 메시지와 result를 반환합니다.
 * 좋아요 -> 좋아요 해제, 좋아요 해제 -> 좋아요
 * @param {string} productUuid 상세 정보를 가져오려는 상품의 ID
 * @returns {Promise<authResponse>} "Success." 메시지와 함께 을 반환합니다.
 *  */

export async function putLikeBrand(productUuid: string) {
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/member/product/like/${productUuid}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  console.log(res);
  if (res.ok) {
    return await res.json();
  }
  return null;
}

/**
 * 상품 좋아요 버튼
 * @remarks
 * PUT 요청을 '/api/member/brand/like/{brandId}' 엔드포인트에 보냅니다. 성공시 메시지와 result를 반환합니다.
 * * 좋아요 -> 좋아요 해제, 좋아요 해제 -> 좋아요
 * @param {number} brandId 상세 정보를 가져오려는 브랜드의 ID
 * @returns {Promise<authResponse>} "Success." 메시지와 함께 을 반환합니다.
 *  */

export async function putLikeProduct(brandId: number) {
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/member/brand/like/${brandId}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  console.log(res);
  if (res.ok) {
    return await res.json();
  }
  return null;
}
