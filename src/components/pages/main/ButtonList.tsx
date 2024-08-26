import Link from "next/link";
import { Button } from "../../ui/button";
import Image from "next/image";

function ButtonList() {
  return (
    <main>
      <div className="m-2 mr-2 ml-6 w-full h-full flex flex-row flex-wrap">
        <div className="w-16 h-22 flex text-center">
          <Link href="/src/components/main/a.tsx" className="mt-4">
            <Image
              src="/store.png"
              alt="store"
              width={16}
              height={16}
              className="w-16 h-16 bg-blue-300 rounded-full"
            ></Image>

            <span className="text-xs font-bold">공식스토어</span>
          </Link>
        </div>

        <div className="w-16 h-22 ml-4 flex text-center">
          <Link href="/src/components/main/a.tsx" className="mt-4">
            <Image
              src="/beauty.png"
              alt="beauty"
              width={16}
              height={16}
              className="w-16 h-16 bg-blue-300 rounded-full"
            ></Image>

            <span className="text-xs font-bold">뷰티</span>
          </Link>
        </div>

        <div className="w-16 h-22 ml-4 flex text-center">
          <Link href="/src/components/main/a.tsx" className="mt-4">
            <Image
              src="/woman.png"
              alt="woman"
              width={16}
              height={16}
              className="w-16 h-16 bg-blue-300 rounded-full"
            ></Image>

            <span className="text-xs font-bold">여성의류</span>
          </Link>
        </div>

        <div className="w-16 h-22 ml-4 flex text-center">
          <Link href="/src/components/main/a.tsx" className="mt-4">
            <Image
              src="/man.png"
              alt="man"
              width={16}
              height={16}
              className="w-16 h-16 bg-blue-300 rounded-full"
            ></Image>

            <span className="text-xs font-bold">남성의류</span>
          </Link>
        </div>

        <div className="w-16 h-22 ml-4 flex text-center">
          <Link href="/src/components/main/a.tsx" className="mt-4">
            <Image
              src="/bag.png"
              alt="bag"
              width={16}
              height={16}
              className="w-16 h-16 bg-blue-300 rounded-full"
            ></Image>

            <span className="text-xs font-bold">백</span>
          </Link>
        </div>

        <div className="w-16 h-22 flex text-center">
          <Link href="/src/components/main/a.tsx" className="mt-4">
            <Image
              src="/shose.png"
              alt="shose"
              width={16}
              height={16}
              className="w-16 h-16 bg-blue-300 rounded-full"
            ></Image>

            <span className="text-xs font-bold">슈즈</span>
          </Link>
        </div>

        <div className="w-16 h-22 ml-4 flex text-center">
          <Link href="/src/components/main/a.tsx" className="mt-4">
            <Image
              src="/ak.png"
              alt="ak"
              width={16}
              height={16}
              className="w-16 h-16 bg-blue-300 rounded-full"
            ></Image>

            <span className="text-xs font-bold">액세서리</span>
          </Link>
        </div>

        <div className="w-16 h-22 ml-4 flex text-center">
          <Link href="/src/components/main/a.tsx" className="mt-4">
            <Image
              src="/sport.png"
              alt="sport"
              width={16}
              height={16}
              className="w-16 h-16 bg-blue-300 rounded-full"
            ></Image>

            <span className="text-xs font-bold">
              스포츠/
              <br />
              레저
            </span>
          </Link>
        </div>

        <div className="w-16 h-22 ml-4 flex text-center">
          <Link href="/src/components/main/a.tsx" className="mt-4">
            <Image
              src="/life.png"
              alt="life"
              width={16}
              height={16}
              className="w-16 h-16 bg-blue-300 rounded-full"
            ></Image>

            <span className="text-xs font-bold">라이프</span>
          </Link>
        </div>

        <div className="w-16 h-22 ml-4 flex text-center">
          <Link href="/src/components/main/a.tsx" className="mt-4">
            <Image
              src="/JAJU.png"
              alt="JAJU"
              width={16}
              height={16}
              className="w-16 h-16 bg-blue-300 rounded-full"
            ></Image>

            <span className="text-xs font-bold">JAJU</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default ButtonList;
