'use client';
import React, { useState } from 'react';
import CartProductListPage from './CartProductListPage';
import {
  CartProductDataType,
  CartProductListType,
} from '@/types/cart/cartTypes';
import Image from 'next/image';

function CartGeneral({
  cartListData,
}: {
  cartListData: CartProductDataType[];
}) {
  // 개별 아이템 체크박스 상태 관리 (id를 key로 하여 상태를 저장)
  const [checkedItems, setCheckedItems] = useState<{ [id: number]: boolean }>(
    cartListData.reduce((acc, item) => ({ ...acc, [item.id]: false }), {})
  );

  // 전체 선택 체크박스 상태 관리
  const [isAllChecked, setIsAllChecked] = useState(false);

  //쇼핑백 약관
  const [isOpen, setIsOpen] = useState(false);

  // 전체 선택 체크박스 핸들러
  const handleSelectAll = () => {
    const newIsAllChecked = !isAllChecked;
    setIsAllChecked(newIsAllChecked);

    // 모든 아이템의 체크 상태를 전체 선택 상태로 동기화
    const updatedCheckedItems = cartListData.reduce(
      (acc, item) => ({ ...acc, [item.id]: newIsAllChecked }),
      {}
    );
    setCheckedItems(updatedCheckedItems);
  };
  console.log(isAllChecked + 'fafaf');
  // 개별 아이템 체크박스 핸들러
  const handleItemCheck = (id: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id], // 해당 id의 체크 상태 반전
    }));

    // 모든 체크박스가 선택되었는지 확인하여 전체 체크박스 상태 업데이트
    const allChecked = cartListData.every((item) => checkedItems[item.id]);
    setIsAllChecked(allChecked);
  };

  return (
    <div className="overflow-x-hidden">
      <div className="flex p-4 ml-3 justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            name="isAllChecked"
            checked={isAllChecked}
            onChange={handleSelectAll}
            className="accent-black w-[24px] h-[24px]"
          />
          <span className="text-sm ml-3">전체선택</span>
        </div>
        <div className="flex items-center">
          <p className="text-xs">선택상품삭제</p>
        </div>
      </div>

      <div className="flex-col">
        {/* 경계선 */}
        <div className="w-full h-2 bg-gray-200"></div>

        {cartListData.map((item) => (
          <div key={item.id}>
            <div className="flex items-center p-6 ml-1">
              {/* 왼쪽 체크박스 */}
              <input
                type="checkbox"
                className="mr-2 w-[24 px] h-[24px] accent-black"
                checked={checkedItems[item.id] || false} // 해당 아이템의 체크 상태
                onChange={() => handleItemCheck(item.id)} // 상태 변경 핸들러
              />

              {/* 상품 정보 */}
              <div className="flex-1 text-sm py-4">
                <span className="font-bold">{item.Product_title}</span>
                {item.Product_content}
              </div>

              {/* 오른쪽 삭제 버튼 */}
              <button className="ml-2">
                <img
                  src="/close.png"
                  alt="delete 버튼"
                  className="w-[24px] h-[24px]"
                />
              </button>
            </div>

            {/* 상품 이미지와 추가 정보 */}
            <div className="flex w-full h-[340px] ml-7">
              <div className="flex flex-col items-center">
                <Image
                  className="w-[90px] h-[120px] object-cover"
                  src={item.Product_image}
                  alt={item.Product_content}
                  width={80}
                  height={120}
                />
                <p className="text-xs mt-3">옵션변경</p>
              </div>

              <div className="flex flex-col pl-5 text-sm">
                <div className="w-[252px] h-[36px]">
                  <p className="text-xs text-gray-500">
                    {item.Product_infoDatail}
                  </p>
                </div>

                <div className="flex justify-between items-center font-bold mt-16">
                  <p className="text-end">
                    {item.Product_Price.toLocaleString('ko-KR')}원
                  </p>

                  <div className="flex items-center">
                    <button className="border w-[24px] h-[24px]">-</button>
                    <input
                      type="text"
                      value={item.Product_choiceNum}
                      className="border w-[40px] h-[24px] text-center text-sm"
                      readOnly
                    />
                    <button className="border w-[24px] h-[24px]">+</button>
                  </div>
                </div>

                <div className="flex py-5 mt-3 border-t border-gray-200">
                  <span className="w-[20px] h-[16px] bg-gray-100 text-xs text-center">
                    s.l.
                  </span>
                  <p className="ml-3 text-xs text-gray-500">1400p 적립</p>
                </div>

                <div className="text-xs text-nowrap text-gray-500 py-3">
                  20시30분까지 결제 시
                  <span className="text-orange-300"> 오늘 출발</span>
                </div>

                <button className="border border-gray-200 text-xs mt-3 py-1 px-2">
                  5% 쿠폰
                </button>
                <p className="text-xs text-gray-500 py-3">사용가능 쿠폰</p>
                <button className="border border-gray-200 py-4 mt-3 w-full">
                  바로 구매
                </button>
              </div>
            </div>

            <div className="pt-6 border-b-1 border-gray-200 py-6"> </div>

            <div className="flex-col py-4 bg-gray-100 items-center ">
              <div className="flex text-sm justify-center">
                <p>0원</p> + 배송비 0원 =
                <p className="text-sm font-bold"> 0원</p>
              </div>

              <div className="flex justify-center mt-2">
                <p className="text-gray-500 text-xs">
                  주식회사 LF 상품으로 30,000원 이상 구매 시 무료배송
                </p>
              </div>
            </div>
            <div className="border-4 border-gray-200"></div>
          </div>
        ))}

        <div className="flex items-center">
          <div className="overflow-hidden transition-all py-6 pl-5">
            <span className="font-bold text-lg">쇼핑백 이용약관</span>
            <button className="ml-48" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? '∧' : '∨'}
            </button>
            {isOpen && (
              <ul className="list-disc pl-6 mt-2 text-sm">
                <li>
                  쇼핑백은 최대 100개의 상품을 담을 수 있고, 최대 보관기간은
                  30일입니다.
                </li>
                <li>
                  판매 종료된 상품은 쇼핑백에 담긴 지 14일 이후 자동삭제 됩니다.
                </li>
                <li>
                  선물포장가능 상품인 경우 주문서에서 선물포장 신청이
                  가능합니다.
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="border-4 border-gray-200"></div>
        <div className="py-10">afaf</div>
      </div>
    </div>
  );
}

export default CartGeneral;
