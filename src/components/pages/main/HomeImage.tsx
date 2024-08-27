"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import * as React from "react";
function ImageLayout() {
  // 이미지 딜레이 후 자동으로 넘어가기
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const imageList = [
    "/Si_logo1.png",
    "/Si_logo2.png",
    "/Si_logo3.png",
    "/Si_logo4.png",
    "/Si_logo5.png",
  ];

  return (
    <Carousel
      className="w-full"
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {imageList.map((imagesrc, index) => (
          <CarouselItem key={index}>
            <div className="flex justify-center w-full">
              <Card>
                <CardContent
                  className="flex justify-center"
                  style={{
                    position: "relative",
                    width: "420px",
                    height: "580px",
                  }}
                >
                  <Image fill={true} src={imagesrc} alt="si_logo1"></Image>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default ImageLayout;
