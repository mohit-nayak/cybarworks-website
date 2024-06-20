import React from "react";
import HeroBanner2 from "../hero-banner-2";
import supportLg from "../../../assets/images/support-lg.png";
import supportSm from "../../../assets/images/support-sm.png";

const SupportBanner = () => {
  return (
    <HeroBanner2
      title="We are always ready to support you"
      description="Experience seamless IT support at your fingertips. Connect with our experts instantly and get your tech issues resolved with ease."
      ctaText="Contact Us Now"
      artifact1={supportLg}
      artifact2={supportSm}
    />
  );
};

export default SupportBanner;
