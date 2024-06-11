import React from "react";
import Features1 from "./features-1";
import twoBoltsImg from "../../assets/images/two-bolts.png";
import Title from "../common/title";

const WhyChooseUs = ({ className = "" }) => {
  const data = [
    {
      title: "Trusted Experts",
      description:
        "Benefit from our seasoned professionals' expertise tailored to your industry.",
    },
    {
      title: "24x7 Support",
      description:
        "We are always ready to support you by handling your IT operations all time.",
    },
    {
      title: "Affordable services",
      description:
        "We offer budget friendly services without compromising in quality.",
    },
    {
      title: "Tailored Solutions",
      description:
        "Receive personalized strategies that address your unique business needs.",
    },
    {
      title: "Client-Centric",
      description:
        "We are committed to serve you to only meet but exceed your expectations.",
    },
  ];

  return (
    <div className={`mx-auto max-w-6xl pb-28 pt-28 ${className}`}>
      <Title variant="secondary" className="mb-24">
        Why Choose Us
      </Title>
      <Features1
        mainImgSrc={twoBoltsImg}
        mainImgAlt="Why Choose Us"
        data={data}
      />
    </div>
  );
};

export default WhyChooseUs;
