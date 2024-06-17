import React from "react";
import Title from "../../common/title";
import Features1 from "../features-1";
import mainImg from "../../../assets/images/shield-2.png";

const whyUsData = [
  {
    title: "Robust Protection",
    description:
      "Holistic strategies to fortify your digital assets against evolving cyber threats.",
  },
  {
    title: "24/7 Monitoring",
    description:
      "Vigilant surveillance and real-time threat detection to minimize risks.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Ensuring adherence to industry standards and data protection regulations.",
  },
  {
    title: "Customized Solutions",
    description:
      "Tailored security protocols designed to fit the specific needs of your business.",
  },
  {
    title: "Stay reassured",
    description:
      "Our security solutions will not only safeguard your IT but will also give you a peace of mind. ",
  },
];

const SecurityServicesWhy = () => {
  return (
    <section className="mx-auto max-w-6xl pb-28 pt-44">
      <Title variant="secondary" className="mb-24">
        Why CybarWorks for Security services?
      </Title>
      <Features1
        data={whyUsData}
        mainImgSrc={mainImg}
        mainImgAlt="Why CybarWorks for Security services?"
      />
    </section>
  );
};

export default SecurityServicesWhy;
