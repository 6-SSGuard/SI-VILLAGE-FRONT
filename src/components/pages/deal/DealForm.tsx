import { dealCardDataType } from "@/types/domainTapes";
import Image from "next/image";
import Badge from "@/components/ui/badge";
import { badge } from "@nextui-org/theme";
function dealPage({deal} : {deal: dealCardDataType}) {

    //현재 시간
    const currentDate = new Date();

    //총 시간
    const full_time = new Date;
    full_time.setHours(24,0,0,0);

    //남은 시간
    const ref_time = full_time.getTime() - currentDate.getTime();
    
    const sec = Math.floor((ref_time / 1000) % 60);
    const min = Math.floor((ref_time / 1000 / 60) % 60); 
    const hours = Math.floor(ref_time / (1000 * 60 * 60));
    const time = `${hours} : ${min} : ${sec}`;

    
    return (
        <main>
        
        <div className="flex px-5">
        <li>
        <div className="p-4 px-6 w-full ">
        <p className="bg-black h-10 text-white text-center">{time} 남음</p>
        </div>

        <div className="flex items-center justify-center">
        <Image src={deal.dealImageUrl} alt="이미지" width={350} height={350} />
        </div>
        <div className="w-full flex flex-col">
         <p className="text-sm text-orange-500">{deal.discountRate}%</p>
         <p className="font-bole text-xl">{deal.discountPrice}</p>
        </div>

        <div className="w-full flex flex-col">
        <p>{deal.brandName}</p>
        <p>{deal.brandTitle}</p>
        </div>

        <ul className="flex gap-1 mt-1">
            {
                deal.badgList.map((badge,index) =>(
                    <Badge key={index} badgeText={badge}/>
                ))
            }

        </ul>
        </li>
        </div>
        </main>
    )
}

export default dealPage;