'use client';
import React, { useEffect, useState } from 'react';
import TitleHeader from '../ui/TitleHeader';
import ArrowLeftIcon from '../icons/common/ArrowLeftIcon';
import SearchIcon from '../icons/common/SearchIcon';
import ShoppingBagIcon from '../icons/common/ShoppingBagIcon';
import SearchModal from '../pages/search/searchModal';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AuthServiceHeader() {
  const pathName = usePathname();
  const [title, setTitle] = useState<string>('');
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    if (pathName.startsWith('/mypage')) {
      setTitle('마이페이지');
    } else {
      switch (pathName) {
        case '/sign-in':
          setTitle('로그인');
          break;
        case '/sign-up':
          setTitle('회원가입');
          break;
        case '/sign-up/join-simple':
          setTitle('온라인 간편가입');
          break;
        case '/sign-in/forgotcredential':
          setTitle('ID/PW 찾기');
          break;
        case '/searchbrand':
        case '/myfavor':
          setTitle('BRAND');
          break;
        case '/product':
          setTitle('test');
          break;
        default:
          setTitle('');
          break;
      }
    }
  }, [pathName]);

  return (
    <header className="flex items-center justify-between w-full h-[56px] p-[0_14px_0_0]">
      <nav className="w-full">
        <ul className="flex items-center justify-between w-full relative">
          {/* 첫 번째 li */}
          <li>
            {pathName === '/' ||
            pathName === '/deal' ||
            pathName === '/event' ? (
              <Image
                src="https://image.sivillage.com/upload/C00001/s3/dspl/banner/90/411/30/240900000505411_20240904175544.gif"
                alt="메인페이지 이미지"
                width={180}
                height={65}
                className="items-start"
              />
            ) : (
              pathName !== '/product' && (
                <button type="button" onClick={() => router.back()}>
                  <ArrowLeftIcon />
                </button>
              )
            )}
          </li>

          {/* 가운데 li: /product일 때와 아닐 때 구분 */}
          {pathName === '/product' ? (
            <li className="flex-grow flex items-center gap-3 p-1">
              <button type="button" onClick={() => router.back()}>
                <ArrowLeftIcon />
              </button>
              <div
                className="flex-grow text-sm border-b border-black text-si-787878 justify-center h-7"
                onClick={openModal}
              >
                놓칠 수 없는 최대 30% 페이백
              </div>
              {isModalOpen && <SearchModal onClose={closeModal} />}
            </li>
          ) : (
            <li className="absolute left-[50%] translate-x-[-50%]">
              <TitleHeader title={title} textStyle="text-lg font-semibold" />
            </li>
          )}

          {/* 마지막 li */}
          <li>
            <ul className="flex items-center gap-4">
              <li onClick={openModal}>
                <SearchIcon />
              </li>

              {isModalOpen && <SearchModal onClose={closeModal} />}
              <li>
                <Link href="cartmain">
                  <ShoppingBagIcon />
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
