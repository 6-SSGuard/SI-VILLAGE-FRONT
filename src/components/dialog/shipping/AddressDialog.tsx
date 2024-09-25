'use client';
import ArrowBottomIcon from '@/components/icons/common/ArrowBottomIcon';
import ArrowTopIcon from '@/components/icons/common/ArrowTopIcon';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import AddressSearchDialog from '@/components/dialog/AddressDialog';
import { postShippingAddress } from '@/actions/mypage/shippingActions';

interface shippingType {
  addressName: string; //배송지명
  recipient: string; // 받으시는 분
  phone: string; // 전화번호
  address: string; // 도로명 주소
  detailedAddress: string; // 상세주소
  postalCode: string; // 우편번호
  defaultAddress: boolean; //  기본 배송지
}

function AddressDialog() {
  const [isAddressAdded, setIsAddressAdded] = useState(true); // 배송지 목록에 추가
  const [defaultAddress, setDefaultAddress] = useState(false); // 기본 배송지 설정
  const [isAgreed, setIsAgreed] = useState(false); // 배송지 정보 수집 및 이용에 대한 동의 (필수)
  const [showAgreement, setShowAgreement] = useState(false); // 동의 관련 정보 펼치기
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState('');
  const [jibunAddress, setJibunAddress] = useState('');
  const [zonecode, setZonecode] = useState('');
  const [recipient, setRecipient] = useState('');
  const [phone, setPhone] = useState('');
  const [addressName, setAddressName] = useState('');

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // 주소 검색 후 데이터 처리
  const handleComplete = (data: any) => {
    // console.log('주소', data);
    setAddress(data.address);
    setZonecode(data.zonecode);
    setJibunAddress(data.jibunAddress);
    console.log(data);
  };

  // 폼 제출 처리
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isAgreed) {
      alert('배송지 정보 수집 및 이용에 대한 동의가 필요합니다.');
      return;
    }

    const shippingData: shippingType = {
      addressName,
      recipient,
      phone,
      address: address,
      detailedAddress: '',
      postalCode: zonecode,
      defaultAddress: defaultAddress,
    };

    console.log(shippingData, 'shiping');

    try {
      const result = await postShippingAddress(shippingData); // API 호출
      if (result) {
        alert('배송지가 성공적으로 등록되었습니다.');
        setIsModalOpen(false);
      } else {
        alert('배송지 등록에 실패했습니다.');
      }
    } catch (error) {
      console.error('배송지 등록 에러:', error);
    }
  };

  return (
    <form className="p-2 space-y-6" onSubmit={handleSubmit}>
      {/* 입력 필드 */}
      <div className="space-y-2 mt-4">
        <Input
          className="w-full placeholder:text-gray-400 border-[#E0E0E0] p-2 border h-[48px]"
          type="text"
          name="addressName"
          placeholder="배송지명"
          onChange={(e) => setAddressName(e.target.value)}
        />
        <Input
          className="w-full placeholder:text-gray-400 p-2 border-[#E0E0E0]  h-[48px]"
          type="text"
          name="recipient"
          placeholder="받으시는 분"
          onChange={(e) => setRecipient(e.target.value)}
        />
        <Input
          className="w-full placeholder:text-gray-400 p-2 border-[#E0E0E0] h-[48px]"
          type="text"
          name="phone"
          placeholder="전화번호"
          onChange={(e) => setPhone(e.target.value)}
        />
        <div className="flex space-x-1 mt-4">
          <Input
            className="w-full placeholder:text-gray-400 p-2 h-[40px] border-none"
            type="text"
            name="postalCode"
            placeholder="우편번호"
            value={zonecode || ''}
            readOnly
          />
          <button
            type="button"
            onClick={handleOpenModal}
            className="border text-sm border-gray-300 w-28 h-[40px]"
          >
            주소검색
          </button>
        </div>

        <div className="border border-b-black border-b"></div>
        {/* 주소 표시 */}
        {zonecode ? (
          <div className="text-sm">
            <p>[도로명] {address}</p>
            <p>[지번] {jibunAddress}</p>
          </div>
        ) : (
          ''
        )}

        <AddressSearchDialog
          open={isModalOpen}
          onClose={handleCloseModal}
          onComplete={handleComplete}
        />

        {/* <div className="border border-b-black border-b-2"></div> */}
      </div>

      {/* 체크박스들 */}
      <div className="flex space-x-8">
        {/* 배송지 목록에 추가 */}
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="dlvpListAddYn"
            checked={isAddressAdded}
            onChange={() => setIsAddressAdded(!isAddressAdded)}
            disabled
            className="w-5 h-5 accent-black"
          />
          <span className="text-sm">배송지 목록에 추가</span>
        </label>

        {/* 기본 배송지로 설정 */}
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="baseDlvpSetYn"
            checked={defaultAddress}
            onChange={() => setDefaultAddress(!defaultAddress)}
            className="w-5 h-5 accent-black"
          />
          <span className="text-sm">기본 배송지로 설정</span>
        </label>
      </div>
      <div>
        <div className="border-t-8 border-gray-200 my-6"></div>
        {/* 배송지 정보 수집 및 이용에 대한 동의 */}
        <div className="flex justify-between items-center">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="chkCustAgreeDlvp"
              checked={isAgreed}
              onChange={() => setIsAgreed(!isAgreed)}
              className="w-5 h-5 accent-black"
            />
            <span className="text-sm">
              배송지 정보 수집 및 이용에 대한 동의 (필수)
            </span>
          </label>

          <button
            type="button"
            onClick={() => setShowAgreement(!showAgreement)}
            className="text-sm text-gray-500 flex items-center"
          >
            {showAgreement ? <ArrowTopIcon /> : <ArrowBottomIcon />}
          </button>
        </div>
        <div className="border-t border-gray-300 mt-4"></div>

        {/* 동의 관련 추가 정보 */}
        {showAgreement && (
          <div className="text-xs text-gray-500">
            <p>배송지 정보는 주문 배송을 위해 수집됩니다.</p>
          </div>
        )}
      </div>

      <p className="text-xs text-gray-600">
        주문정보(주문완료, 배송상태 등)는 주문고객님의 정보로 안내드립니다.
      </p>
      {/* 버튼을 페이지 하단에 고정 */}
      <button
        className="w-full fixed bottom-0 left-0 bg-si-131922 text-white h-12"
        type="submit"
      >
        배송지 적용
      </button>
    </form>
  );
}

export default AddressDialog;
