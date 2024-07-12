import React from "react";
import Title from "../../common/title";
import Features1 from "../features-1";
import mainImg from "../../../assets/images/gear-2.png";

const whyUsData = [
  {
    title: "Proactive Support",
    description:
      "Anticipating and resolving issues before they disrupt your operations.",
  },
  {
    title: "Efficiency",
    description:
      "Streamlined processes and optimized workflows to maximize productivity.",
  },
  {
    title: "Cost-Effectiveness",
    description:
      "Affordable services that offer maximum value and return on investment.",
  },
  {
    title: "Scalability",
    description:
      "Adaptable solutions that grow with your business without compromising performance.",
  },
  {
    title: "Security",
    description:
      "Robust measures to safeguard your data and infrastructure from cyber threats.",
  },
];

const ItServicesWhy = () => {
  return (
    <section className="mx-auto max-w-6xl pt-20 pb-16 lg:pb-28 lg:pt-44">
      <Title variant="secondary" className="mb-10 md:mb-24">
        Why CybarWorks for Managed IT services?
      </Title>
      <Features1
        data={whyUsData}
        mainImgSrc={mainImg}
        mainImgAlt="Why CybarWorks for Managed IT services?"
      />
    </section>
  );
};

export default ItServicesWhy;
