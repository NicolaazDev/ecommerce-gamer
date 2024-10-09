import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { ArrowRight } from "lucide-react";

interface SliderAuthPageProps {
  isLogin: boolean;
}

const SliderAuthPage: React.FC<SliderAuthPageProps> = ({ isLogin }) => {
  const images = [
    "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg",
    "https://wallpapercave.com/wp/wp9059113.jpg",
    "https://i.pinimg.com/originals/12/d4/00/12d400b928e32c0902d39d155d10e4c0.jpg",
  ];

  return (
    <div className="h-full w-[50%]">
      <div className="h-full w-full p-4 center relative rounded-3xl">
        <button className="absolute top-8 left-8 h-[40px] px-6 bg-primary transition-all opacity-100 text-white center space-x-2 rounded-3xl z-10 hover:bg-secondary group">
          <span className="!opacity-100  transition-all font-poppinsLight text-[12px]">
            Voltar para a loja
          </span>
          <ArrowRight
            size={16}
            strokeWidth={1.5}
            className="transition-all group-hover:ml-6"
          />
        </button>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          className="h-full w-full rounded-3xl"
          onAutoplayTimeLeft={(swiper, time, progress) => {
            const bullets = document.querySelectorAll(
              ".swiper-pagination-bullet .progress-bar"
            );
            bullets.forEach((bullet: any, idx) => {
              bullet.style.transform =
                idx === swiper.realIndex ? `scaleX(${progress})` : "scaleX(0)";
            });
          }}
          pagination={{
            clickable: true,
            type: "progressbar",
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="h-full w-full relative">
                <img
                  className="h-full w-full object-cover rounded-2xl absolute"
                  src={image}
                  alt={`Slide ${index + 1}`}
                />
                <div className="h-full w-full bg-[rgba(0,0,0,0.5)] rounded-2xl absolute"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderAuthPage;
