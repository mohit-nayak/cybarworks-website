import React from "react";
import HeroBanner2 from "../hero-banner-2";
import shieldLg from "../../../assets/images/shield-lg.png";
import shieldSm from "../../../assets/images/shield-sm.png";

const SecurityServicesBanner = () => {
  return (
    <HeroBanner2
      title="Secure, Dependable Security Services"
      description="Protect your business with our comprehensive security solutions. Learn how we can safeguard your data and infrastructure."
      ctaText="Contact Us Now"
      artifact1={shieldLg}
      artifact2={shieldSm}
    />
  );
};

export default SecurityServicesBanner;
