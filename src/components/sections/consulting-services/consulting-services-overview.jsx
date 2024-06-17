import React from "react";
import ServiceOverview from "../service-overview";
import serviceFeatureImg from "../../../assets/images/consulting-services-feature.png";

const ConsultingServicesOverview = () => {
  return (
    <ServiceOverview
      title="Game-changing IT solutions: Grow rapidly with tailored strategies"
      tagline="Boost your business with  strategic IT Solutions – Let's Make Your Goals Happen!"
      descriptionList={[
        "At CybarWorks, our consulting services encompass a wide range of expertise, particularly in cloud and other cutting-edge technologies. With our team of certified experts, we offer flexible engagement models, including hourly or project-based work, as well as architecture design for various IT networks or systems.",
        "Our consulting offerings are tailored to address unique challenges and opportunities, ensuring that your organization stays ahead in today's dynamic digital landscape.",
      ]}
      image={serviceFeatureImg}
      imageAlt="Consulting Services"
      className="pt-0"
    />
  );
};

export default ConsultingServicesOverview;
