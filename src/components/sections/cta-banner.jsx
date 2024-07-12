import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Title from "../common/title";
import AppButton from "../common/app-button";

const CtaBanner = ({ title = "", ctaText = "Contact Us Now" }) => {
  return (
    <section className="relative flex h-[620px] max-h-full items-center justify-center overflow-hidden md:h-[1174px]">
      <div className="absolute top-0 hidden h-full w-full lg:block">
        <StaticImage
          src="../../assets/images/cta-banner-bg.png"
          formats={["png"]}
          className="h-full w-full"
          layout="fullWidth"
          width={1440}
          height={1248}
          quality={100}
          alt="bg"
        />
      </div>
      <div className="absolute top-0 h-full w-full lg:hidden">
        <StaticImage
          src="../../assets/images/cta-banner-bg-mobile.png"
          formats={["png"]}
          className="h-full w-full"
          layout="fullWidth"
          width={480}
          height={620}
          quality={100}
          alt="bg"
        />
      </div>
      <div className="relative -top-24 mx-auto max-w-3xl space-y-8 p-6 lg:top-0 lg:px-8">
        <Title variant="primary">{title}</Title>
        <div className="flex justify-center">
          <AppButton as="link" href="/contact">
            {ctaText}
          </AppButton>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
