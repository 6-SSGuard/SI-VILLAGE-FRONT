'use client';
import React, { useEffect, useState } from 'react';
import { getCartById } from '@/actions/cart/cartActions';
import CartItem from './CartItem';
import { CartListItem } from '@/app/(cart)/cartmain/page';
import CartBottomNav from '@/components/layouts/CartBottomNav';
import ArrowTopIcon from '@/components/icons/common/ArrowTopIcon';
import ArrowBottomIcon from '@/components/icons/common/ArrowBottomIcon';

interface CartItemType {
  cartId: number;
  productCode: string;
  productOptionId: number;
  quantity: number;
  selected: boolean;
}

function CartGeneral({ cartListId }: { cartListId: CartListItem[] }) {
  const [cartData, setCartData] = useState<CartItemType[]>([]);
  const [isCartEmpty, setIsCartEmpty] = useState(false);
  const [total, setTotal] = useState(0);

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
    if (cartListId?.length > 0) {
      fetchCartData();
      setIsCartEmpty(false); // 장바구니에 아이템이 있을 때
    } else {
      setIsCartEmpty(true); // 장바구니가 비어 있을 때
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
  };

  return (
    <div className="overflow-x-hidden">
      {!isCartEmpty ? (
        <>
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
              <p className="text-sm text-si-787878 border-b- border-si-787878">
                선택상품삭제
              </p>
            </div>
          </div>
          <div className="w-full h-2 bg-gray-200"></div>
        </>
      ) : (
        <></>
      )}

      {/* 경계선 */}
      <div className="flex-col">
        {isCartEmpty ? (
          <div className="text-center">
            <p className="text-sm font-semibold text-si-787878 my-20">
              쇼핑백에 담긴 상품이 없습니다.
            </p>
          </div>
        ) : (
          <div>
            {cartData.map((item) => (
              <div key={item.cartId} className="cart-item">
                <CartItem
                  cartId={item.cartId}
                  productCode={item.productCode}
                  quantity={item.quantity}
                  selected={item.selected}
                  total={total}
                  setTotal={setTotal}
                />
              </div>
            ))}
          </div>
        )}
        <div className="w-full h-2 bg-gray-200"></div>
        <div className="flex w-full overflow-hidden transition-all px-6 justify-between h-16">
          <span className="flex font-bold text-lg justify-center items-center">
            쇼핑백 이용약관
          </span>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <ArrowTopIcon /> : <ArrowBottomIcon />}
          </button>
        </div>
        {isOpen && (
          <ul className="list-disc px-4 mx-2 mt-3 text-sm text-[#404040]">
            <li>
              쇼핑백은 최대 100개의 상품을 담을 수 있고, 최대 보관기간은
              30일입니다.
            </li>
            <li>
              판매 종료된 상품은 쇼핑백에 담긴 지 14일 이후 자동삭제 됩니다.
            </li>
            <li>
              선물포장가능 상품인 경우 주문서에서 선물포장 신청이 가능합니다.
            </li>
          </ul>
        )}
      </div>
      <div className="w-full h-2 bg-gray-200"></div>
      <CartBottomNav total={total} />
    </div>
  );
}

export default CartGeneral;
