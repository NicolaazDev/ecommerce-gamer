"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface ProductSliderProps {}

const ProductImages = [
  {
    banner:
      "https://www.pcworld.com/wp-content/uploads/2023/04/motherboard-shot-100898287-orig.jpg?quality=50&strip=all",
  },
  {
    banner: "https://wallpapercave.com/wp/wp9059113.jpg",
  },
  {
    banner:
      "https://www.adrenaline.com.br/wp-content/uploads/2023/02/CHAMADA-RM.jpg",
  },
  {
    banner:
      "https://preview.free3d.com/img/2021/11/3190207279316076396/p9sun4jj.jpg",
  },
];

const ProductSlider: React.FC<ProductSliderProps> = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="h-full w-full center">
      <div className="h-[96%] w-[96%] p-4 center-col relative rounded-3xl">
        <Swiper
          modules={[Thumbs]}
          spaceBetween={30}
          slidesPerView={1}
          thumbs={{
            swiper: thumbsSwiper,
            slideThumbActiveClass: "slider-ativo",
          }}
          className="h-full w-full rounded-3xl"
        >
          {ProductImages.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="h-full w-full relative">
                <img
                  className="h-full w-full object-cover rounded-2xl absolute"
                  src={item.banner}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[Thumbs]}
          className="h-[70px] w-full mt-5"
          thumbs={{ slideThumbActiveClass: "slider-ativo" }}
        >
          {ProductImages.map((item, index) => (
            <SwiperSlide key={index} className="h-full">
              <img
                src={item.banner}
                className="h-full rounded-lg cursor-pointer w-full object-cover opacity-60 transition-all duration-700"
                alt={`Slide ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductSlider;
