import React from "react";
import ServicesBanner from "../services-banner";
import gearLg from "../../../assets/images/gear-lg.png";
import gearSm from "../../../assets/images/gear-sm.png";

const ItServicesBanner = () => {
  return (
    <ServicesBanner
      title="Affordable, Reliable Managed IT Services "
      description="Our stress-free IT management solutions are designed to optimize your business performance while you focus on growth."
      ctaText="Contact Us Now"
      artifact1={gearLg}
      artifact2={gearSm}
      artifactAnimation="animate-spin-pulse-2"
    />
  );
};

export default ItServicesBanner;
