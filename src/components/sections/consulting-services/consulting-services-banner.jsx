import React from "react";
import HeroBanner2 from "../hero-banner-2";
import growthLg from "../../../assets/images/growth-lg.png";
import growthSm from "../../../assets/images/growth-sm.png";

const ConsultingServicesBanner = () => {
  return (
    <HeroBanner2
      title="Profitable, Strategic IT Consulting Services"
      description="Customized it solutions designed to propel your business forward. Discover how our expertise can elevate your operations."
      ctaText="Contact Us Now"
      artifact1={growthLg}
      artifact2={growthSm}
    />
  );
};

export default ConsultingServicesBanner;
