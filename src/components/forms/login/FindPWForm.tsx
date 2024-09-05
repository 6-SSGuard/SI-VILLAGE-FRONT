import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

function PW_Page() {
  return (
    <main className="h-relative">
      {/* 전체 레이아웃 */}

      <form className="p-6">
        {/* 전체 레이아웃 */}
        <div className="w- full h-70 ">
          {/* 이름 컴포넌트 레이아웃 잡기 */}
          <div className="flex justify-center w-full h-8 mt-3">
            <Input className="h-12" type="search" name="ID" />
          </div>

          {/* 비밀번호 및 select box 레이아웃 */}
          <div className="w-full h-12 mt-6 flex justify-start">
            <select
              className="border border-gray-200 w-24 h-12 mb-1 bound"
              value="010"
            >
              <option value="010">010</option>
              <option value="011">011</option>
              <option value="012">012</option>
              <option value="013">013</option>
              <option value="014">014</option>
              <option value="015">015</option>
              <option value="016">016</option>
              <option value="017">017</option>
              <option value="018">018</option>
              <option value="019">019</option>
              010{' '}
            </select>
            <Input
              className=" w-2/3 h-12 ml-4"
              type="search"
              name="phonenumber"
            ></Input>
          </div>

          <div className="w-full h-14">
            <Button className="w-full h-12 mt-5 bg-gray-500" type="submit">
              임시비밀번호 발송
            </Button>
          </div>

          <div className="mt-10 relative flex items-center justify-center w-full py-4">
            <span className="absolute inset-x-0 border-b-2 border-gray-300 bg-black"></span>
            <span className="relative bg-white px-4 text-black text-sm">
              OR
            </span>
          </div>

          <Button className="font-bold w-full h-12 mt-3 " type="submit">
            휴대폰 인증으로 찾기
          </Button>
          <Button className="font-bold w-full h-12 mt-2" type="submit">
            아이핀 인증으로 찾기
          </Button>
        </div>

        {/* <div>
                <Input className = "pd-3" type = "search" name = "name" placeholder ="이름" />
                </div> */}
      </form>
    </main>
  );
}

export default PW_Page;
