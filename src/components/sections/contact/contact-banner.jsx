import React from "react";
import HeroBanner2 from "../hero-banner-2";
import telephoneLg from "../../../assets/images/telephone-lg.png";
import telephoneSm from "../../../assets/images/telephone-sm.png";

const ContactBanner = () => {
  return (
    <HeroBanner2
      title="Contact Us to inquire about our services"
      description="Lets collaborate and strive for success together by. Take the first step towards growth and get in touch with us today."
      cta={false}
      artifact1={telephoneLg}
      artifact2={telephoneSm}
    />
  );
};

export default ContactBanner;
