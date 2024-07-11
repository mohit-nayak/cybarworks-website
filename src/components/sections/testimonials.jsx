import React from "react";
import Title from "../common/title";
import testimonialsData from "../../data/testimonials-data";
import Carousel from "../common/carousel";
import { SwiperSlide } from "swiper/react";
import { StaticImage } from "gatsby-plugin-image";
import StarGradient from "../icons/star-gradient";
import useWindowWidth from "../../hooks/useWindowWidth";

const Testimonials = ({
  className = "",
  title = "",
  data = testimonialsData,
}) => {
  const { isMobileView, isTabView } = useWindowWidth();

  return (
    <section className={`py-28 ${className}`}>
      <div>
        <Title variant="secondary" className="mb-10 px-8">
          {title}
        </Title>
        <div>
          <Carousel
            slidesPerView={isMobileView ? 1.2 : isTabView ? 2.5 : 4}
            spaceBetween={isMobileView ? 20 : isTabView ? 30 : 35}
          >
            {data.map((testimonial, index) => (
              <SwiperSlide
                key={index}
                className="overflow-hidden rounded-[20px] bg-primary-gradient p-[1px] font-semibold"
              >
                <div className="relative flex w-full flex-col rounded-[20px] bg-primary-dark text-lg font-light text-secondary-dark">
                  <div className="absolute left-0 top-0 h-full w-full">
                    <StaticImage
                      src="../../assets/images/shadow-bg-2.png"
                      formats={["png"]}
                      className="h-full w-full"
                      layout="fullWidth"
                      width={220}
                      height={182}
                      quality={100}
                      alt="shadow"
                    />
                  </div>
                  <div className="min-h-[300px] bg-secondary-gradient-light px-6 py-8 md:min-h-[450px] xl:px-10">
                    <div className="text-xl md:text-2xl">
                      {testimonial.name}
                    </div>
                    <div className="mb-1.5 text-sm md:mb-3 md:text-base">{`${testimonial.position}, ${testimonial.company}`}</div>
                    <div className="mb-3 flex gap-x-1 md:mb-6 md:gap-x-2">
                      {Array.apply(null, Array(testimonial.rating)).map(
                        (_, index) => (
                          <StarGradient
                            key={index}
                            className="aspect-square h-full max-h-[14px] w-full max-w-[14px] md:max-h-[26px] md:max-w-[26px]"
                          />
                        ),
                      )}
                    </div>
                    <p className="line-clamp-[7] text-base font-extralight md:line-clamp-none md:text-lg md:font-light">
                      "{testimonial.description}"
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
