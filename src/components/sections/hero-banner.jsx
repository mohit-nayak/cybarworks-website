import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import AppButton from "../common/app-button";
import Title from "../common/title";

const HeroBanner = ({
  title = "",
  description = "",
  ctaText = "",
  ctaOnClick = () => {},
}) => {
  return (
    <section className="relative h-full min-h-[850px] sm:min-h-[1000px] max-h-full overflow-hidden md:h-[1248px]">
      <div className="absolute top-0 h-full w-full">
        <StaticImage
          src="../../assets/images/hero-banner-bg.png"
          formats={["png"]}
          className="hidden h-full w-full sm:block"
          layout="fullWidth"
          width={1440}
          height={1248}
          quality={100}
          alt="hero bg"
        />
        <StaticImage
          src="../../assets/images/hero-banner-bg-mobile.png"
          formats={["png"]}
          className="h-full w-full sm:hidden"
          layout="fullWidth"
          width={480}
          height={900}
          quality={100}
          alt="hero bg"
        />
      </div>

      <div className="max-w-xl relative mx-auto mt-32 space-y-8 px-8 py-6 md:mt-40 lg:max-w-3xl lg:px-8">
        <Title variant="primary">{title}</Title>
        <p className="mx-auto max-w-xl text-center text-xl font-light text-secondary-dark">
          {description}
        </p>
        <div className="flex justify-center">
          <AppButton as="link" href="/contact">
            {ctaText}
          </AppButton>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
