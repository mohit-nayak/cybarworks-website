import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import AppButton from "../common/app-button";

const HeroBanner = ({
  title = "",
  description = "",
  ctaText = "",
  ctaOnClick = () => {},
}) => {
  return (
    <div className="relative h-[1248px] max-h-full overflow-hidden">
      <div className="absolute top-0 h-full w-full">
        <StaticImage
          src="../../assets/images/hero-banner-bg.png"
          formats={["png"]}
          class="w-full h-full"
          layout="fullWidth"
          width={1440}
          height={1248}
          quality={100}
        />
      </div>

      <div className="relative mx-auto mt-40 max-w-3xl space-y-8 p-6 lg:px-8">
        <h1 className="text-title-primary-sm leading-title-primary-sm bg-primary-gradient lg:leading-title-primary-lg lg:text-title-primary-lg bg-clip-text text-center font-extralight text-transparent">
          {title}
        </h1>
        <p className="mx-auto max-w-xl text-center text-xl font-light text-secondary-dark">
          {description}
        </p>
        <div className="flex justify-center">
          <AppButton onClick={ctaOnClick}>{ctaText}</AppButton>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
