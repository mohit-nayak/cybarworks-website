import React from "react";
import Title from "../common/title";
import blogData from "../../data/blog-data";
import Carousel from "../common/carousel";
import { SwiperSlide } from "swiper/react";
import { StaticImage } from "gatsby-plugin-image";
import AppButton from "../common/app-button";

const BlogCarousel = () => {
  return (
    <section className="py-28">
      <div className="">
        <Title variant="secondary" className="mb-10">
          Discover our featured blogs
        </Title>
        <div>
          <Carousel>
            {blogData.map((blog, index) => (
              <SwiperSlide
                key={index}
                className="font-semibol bg-secondary-gradient rounded-[20px] p-[1px]"
              >
                <div className="relative flex w-full flex-col overflow-hidden rounded-[20px] bg-primary-dark text-lg font-light text-secondary-dark">
                  <div className="absolute left-0 top-0 h-full w-full">
                    <StaticImage
                      src="../../assets/images/shadow-bg-2.png"
                      formats={["png"]}
                      class="h-full w-full"
                      layout="fullWidth"
                      width={220}
                      height={182}
                      quality={100}
                    />
                  </div>
                  <div className="bg-secondary-gradient-light flex min-h-[500px] flex-col">
                    <img
                      src={blog.thumbnail}
                      alt={blog.title}
                      className="h-[220px] w-full object-cover"
                      width={360}
                      height={208}
                    />
                    <div className="flex flex-1 flex-col justify-between px-7 pb-10 pt-5">
                      <div>
                        <div className="mb-3 flex items-center justify-between text-base text-secondary-light opacity-70">
                          <span>#{blog.category}</span>
                          <span>{blog.date}</span>
                        </div>
                        <h5 className="text-xl">{blog.title}</h5>
                      </div>
                      <AppButton
                        variant="primary"
                        className="mx-auto max-w-max"
                        childClassName="text-sm font-normal py-1 px-8"
                      >
                        Read More
                      </AppButton>
                    </div>
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

export default BlogCarousel;
