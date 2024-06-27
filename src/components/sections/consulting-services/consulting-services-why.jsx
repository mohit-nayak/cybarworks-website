import React from "react";
import Title from "../../common/title";
import Features1 from "../features-1";
import mainImg from "../../../assets/images/growth-2.png";

const whyUsData = [
  {
    title: "Strategic Guidance",
    description: "Expert advice and insights to boost your business growth.",
  },
  {
    title: "Technological Expertise",
    description:
      "Profound knowledge and proficiency across various IT domains and platforms.",
  },
  {
    title: "Innovative Solutions",
    description:
      "Creative approaches and cutting-edge technologies to address your unique challenges.",
  },
  {
    title: "Collaborative",
    description:
      "Engaging with you as a trusted advisor and collaborator in achieving your business objectives.",
  },
  {
    title: "Long term Startegies ",
    description:
      "We anticipate problems and provide strategies to mitigate IT risks to safeguard your business in the long-term.",
  },
];

const ConsultingServicesWhy = () => {
  return (
    <section className="mx-auto max-w-6xl pb-28 pt-44">
      <Title variant="secondary" className="mb-24">
        Why CybarWorks for IT Consultancy?
      </Title>
      <Features1
        data={whyUsData}
        mainImgSrc={mainImg}
        mainImgAlt="Why CybarWorks for IT Consultancy?"
      />
    </section>
  );
};

export default ConsultingServicesWhy;
