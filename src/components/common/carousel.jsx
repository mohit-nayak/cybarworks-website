import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";
import ArrowRightCircle from "../icons/arrow-right-circle";

import "swiper/css";
import "swiper/css/navigation";

const Carousel = ({ children }) => {
  return (
    <div>
      <div className="mx-auto mb-16 flex max-w-7xl items-center justify-between">
        <button className="prev-btn text-secondary-dark outline-none">
          <ArrowRightCircle className="aspect-square h-full max-h-[65px] w-full max-w-[65px] rotate-180" />
        </button>
        <button className="next-btn text-secondary-dark outline-none">
          <ArrowRightCircle className="aspect-square h-full max-h-[65px] w-full max-w-[65px]" />
        </button>
      </div>
      <Swiper
        spaceBetween={40}
        slidesPerView={4}
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
