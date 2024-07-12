import React from "react";
import ServiceOverview from "../service-overview";
import serviceFeatureImg from "../../../assets/images/security-services-feature.png";

const SecurityServicesOverview = () => {
  return (
    <ServiceOverview
      title="Powerful Cyber security solutions: Keeping your business safe and sound"
      tagline="Time to gear up and defend against Security threats – Let's be fighters, not victims"
      descriptionList={[
        "At CybarWorks, we specialize in empowering organizations to navigate their security journey effectively. Our comprehensive security services are designed to assist your organization in understanding and achieving the necessary security standards, including NIST, ISO, SOC, GDPR, PCI, and HIPAA. ",
        "With our expert guidance, you can ensure that your organization is well-equipped to handle today's security challenges and maintain compliance with industry regulations.",
      ]}
      image={serviceFeatureImg}
      imageAlt="Security Services"
      className="pt-10 md:pt-0"
    />
  );
};

export default SecurityServicesOverview;
