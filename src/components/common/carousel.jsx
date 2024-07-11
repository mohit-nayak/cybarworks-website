import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";
import ArrowRightCircle from "../icons/arrow-right-circle";

import "swiper/css";
import "swiper/css/navigation";

const Carousel = ({ children, slidesPerView = 4, spaceBetween = 35 }) => {
  return (
    <div>
      <div className="mx-auto mb-8 md:mb-16 px-8 flex max-w-7xl items-center justify-between">
        <button className="prev-btn text-secondary-dark outline-none">
          <ArrowRightCircle className="aspect-square h-full max-h-[44px] w-full max-w-[44px] rotate-180 md:max-h-[65px] md:max-w-[65px]" />
        </button>
        <button className="next-btn text-secondary-dark outline-none">
          <ArrowRightCircle className="aspect-square h-full max-h-[44px] w-full max-w-[44px] md:max-h-[65px] md:max-w-[65px]" />
        </button>
      </div>
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        loop={true}
        centeredSlides
        grabCursor
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        modules={[Navigation]}
        onSlideChange={() => {}}
        onSwiper={(swiper) => {}}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default Carousel;
