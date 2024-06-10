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
    <section className="relative h-[1248px] max-h-full overflow-hidden">
      <div className="absolute top-0 h-full w-full">
        <StaticImage
          src="../../assets/images/hero-banner-bg.png"
          formats={["png"]}
          class="h-full w-full"
          layout="fullWidth"
          width={1440}
          height={1248}
          quality={100}
        />
      </div>

      <div className="relative mx-auto mt-40 max-w-3xl space-y-8 p-6 lg:px-8">
        <Title variant="primary">{title}</Title>
        <p className="mx-auto max-w-xl text-center text-xl font-light text-secondary-dark">
          {description}
        </p>
        <div className="flex justify-center">
          <AppButton onClick={ctaOnClick}>{ctaText}</AppButton>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
