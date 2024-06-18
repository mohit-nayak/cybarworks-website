import React from "react";
import HeroBanner2 from "../hero-banner-2";
import hashLg from "../../../assets/images/hash-lg.png";
import hashSm from "../../../assets/images/hash-sm.png";

const BlogBanner = () => {
  return (
    <HeroBanner2
      title="Discover blogs that will help you grow"
      description="Explore our collection of insightful blogs covering a wide range of topics, from the latest trends in technology to valuable insights and actionable tips."
      cta={false}
      artifact1={hashLg}
      artifact2={hashSm}
    />
  );
};

export default BlogBanner;
