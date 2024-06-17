import React from "react";
import ServiceOverview from "../service-overview";
import serviceFeatureImg from "../../../assets/images/manage-it-feature.png";

const ItServicesOverview = () => {
  return (
    <ServiceOverview
      title="24/7 IT Management: Making your growth unstoppable"
      tagline="Say goodbye to IT management headaches and hello to seamless operations."
      descriptionList={[
        "At CybarWorks, we understand the complexities of managing IT operations, and our goal is to simplify the process for you. Our team of experts is dedicated to providing streamlined solutions that optimize efficiency and minimize downtime.",
        "By leveraging cutting-edge technology and industry best practices, we can help you achieve a more efficient and reliable IT infrastructure, allowing you to focus on driving your business forward.",
      ]}
      image={serviceFeatureImg}
      imageAlt="Manage IT Services"
      className="pt-0"
    />
  );
};

export default ItServicesOverview;
