'use client';
import React, { useEffect, useState } from 'react';
import CartProductListPage from './CartProductListPage';
import {
  CartProductDataType,
  CartProductListType,
} from '@/types/cart/cartTypes';
import Image from 'next/image';
import { getCartById } from '@/actions/cart/cartActions';
import CartItem from './CartItem';
import { CartListItem } from '@/app/(cart)/cartmain/page';

interface CartItemType {
  cartId: number;
  productCode: string;
  productOptionId: number;
  quantity: number;
  selected: boolean;
}

function CartGeneral({ cartListId }: { cartListId: CartListItem[] }) {
  const [cartData, setCartData] = useState<CartItemType[]>([]);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        // cartListId 배열의 각 요소에 대해 getCartById 호출
        const cartResponses = await Promise.all(
          cartListId.map(async (cartid) => {
            const data = await getCartById(cartid.id);
            return data; // 각 cartId에 해당하는 데이터를 반환
          })
        );
        // 모든 데이터를 받아와서 상태에 저장
        setCartData(cartResponses);
      } catch (error) {
        console.error('카트 데이터를 가져오는 중 오류 발생:', error);
      }
    };
    // 컴포넌트가 마운트될 때 fetchCartData 호출
    if (cartListId.length > 0) {
      fetchCartData();
    }
  }, [cartListId]);

  // 전체 선택 체크박스 상태 관리
  const [isAllChecked, setIsAllChecked] = useState(false);

  //쇼핑백 약관
  const [isOpen, setIsOpen] = useState(false);

  // 전체 선택 체크박스 핸들러
  const handleSelectAll = () => {
    const newIsAllChecked = !isAllChecked;
    setIsAllChecked(newIsAllChecked);

    // 모든 아이템의 체크 상태를 전체 선택 상태로 동기화
    // const updatedCheckedItems = cartListData.reduce(
    //   (acc, item) => ({ ...acc, [item.id]: newIsAllChecked }),
    //   {}
    // );
    // setCheckedItems(updatedCheckedItems);
  };
  // console.log(isAllChecked + 'fafaf');
  // 개별 아이템 체크박스 핸들러
  // const handleItemCheck = (id: number) => {
  //   setCheckedItems((prev) => ({
  //     ...prev,
  //     [id]: !prev[id], // 해당 id의 체크 상태 반전
  //   }));

  //   // 모든 체크박스가 선택되었는지 확인하여 전체 체크박스 상태 업데이트
  //   const allChecked = cartListData.every((item) => checkedItems[item.id]);
  //   setIsAllChecked(allChecked);
  // };

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
        <div>
          {cartData.map((item, index) => (
            <div key={index} className="cart-item">
              <CartItem productCode={item.productCode} />

              <p>
                <strong>Quantity:</strong> {item.quantity}
              </p>
              <p>
                <strong>Selected:</strong> {item.selected ? 'Yes' : 'No'}
              </p>
            </div>
          ))}
        </div>

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
