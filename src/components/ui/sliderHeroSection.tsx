"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { ExternalLink } from "lucide-react";

interface SliderHeroSectionProps {}

const SliderItems = [
  {
    title: "Placas Mães",
    description:
      "Placas Máes da Biostar, Gigabyte, Asus, Intel, AMD e muito mais",
    banner:
      "https://www.pcworld.com/wp-content/uploads/2023/04/motherboard-shot-100898287-orig.jpg?quality=50&strip=all",
    href: "/placamae",
  },
  {
    title: "Monitores Gamer",
    description:
      "Promoção para todos monitores gamer da Biostar, Samsung, LG, MSI e muito mais",
    banner: "https://wallpapercave.com/wp/wp9059113.jpg",
    href: "/monitor",
  },
  {
    title: "Memórias RAM",
    description: "Memórias RAM da Biostar, DDR4, DDR5 e muito mais",
    banner:
      "https://www.adrenaline.com.br/wp-content/uploads/2023/02/CHAMADA-RM.jpg",
    href: "/memoriaram",
  },
  {
    title: "Processadores Intel",
    description: "Descontos imperdiveis nos processadores Intel",
    banner:
      "https://preview.free3d.com/img/2021/11/3190207279316076396/p9sun4jj.jpg",
    href: "/processadores",
  },
];

const SliderHeroSection: React.FC<SliderHeroSectionProps> = () => {
  return (
    <div className="h-full w-full center">
      <div className="h-[96%] w-[96%] p-4 center relative rounded-3xl">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
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
            type: "bullets",
            // bulletActiveClass: "bg-red-900",
          }}
        >
          {SliderItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="h-full w-full relative">
                <img
                  className="h-full w-full object-cover rounded-2xl absolute"
                  src={item.banner}
                  alt={`Slide ${index + 1}`}
                />
                <div className="h-full w-full bg-[rgba(0,0,0,0.5)] rounded-2xl absolute pb-[60px] pl-[60px] center-col !justify-end !items-start text-background">
                  <div className="center-col !justify-start !items-start space-y-2 mb-6">
                    <h2 className="font-poppinsBold text-7xl">{item.title}</h2>
                    <p className="font-poppinsRegular text-xl">
                      {item.description}
                    </p>
                  </div>

                  <a
                    href={item.href}
                    className="center bg-background rounded-2xl space-x-5 py-3 px-5 text-foreground"
                  >
                    <span>Saiba Mais</span>
                    <ExternalLink size={20} strokeWidth={1} />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderHeroSection;
