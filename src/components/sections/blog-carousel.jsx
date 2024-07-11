import React from "react";
import Title from "../common/title";
import Carousel from "../common/carousel";
import { SwiperSlide } from "swiper/react";
import AppButton from "../common/app-button";
import BlogPreviewCard from "./blog-preview-card";
import useWindowWidth from "../../hooks/useWindowWidth";

const BlogCarousel = ({ blogPosts = [] }) => {
  const { isMobileView, isTabView } = useWindowWidth();

  return (
    <section className="pb-12 pt-10 md:pb-0 md:pt-28">
      <div className="">
        <Title variant="secondary" className="mb-10 px-8">
          Discover our featured blogs
        </Title>
        <div>
          <Carousel
            slidesPerView={isMobileView ? 1.2 : isTabView ? 2.5 : 4}
            spaceBetween={isMobileView ? 20 : isTabView ? 30 : 35}
          >
            {blogPosts.map((post) => (
              <SwiperSlide key={post.id}>
                <BlogPreviewCard post={post.frontmatter} />
              </SwiperSlide>
            ))}
          </Carousel>
        </div>

        <div className="flex flex-col items-center space-y-7">
          <p className="mt-8 max-w-[440px] text-center md:mt-16">
            Whether you're seeking cybersecurity strategies, cloud computing
            insights, or IT management best practices, our insightful blogs have
            you covered. Stay informed and empowered for success
          </p>
          <AppButton as="link" href="/blog" variant="primary">
            Explore More Blogs
          </AppButton>
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;
