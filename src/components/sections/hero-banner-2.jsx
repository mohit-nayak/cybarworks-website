import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import AppButton from "../common/app-button";
import Title from "../common/title";

const HeroBanner2 = ({
  title = "",
  description = "",
  cta = true,
  ctaText = "",
  ctaOnClick = () => {},
  artifact1,
  artifact2,
  artifactAnimation = "animate-pulse-float-5s",
}) => {
  return (
    <section className="relative md:h-[800px] lg:h-[920px] max-h-full overflow-hidden">
      <div className="absolute top-0 h-full w-full">
        <StaticImage
          src="../../assets/images/services-hero-bg.png"
          formats={["png"]}
          className="h-full w-full"
          layout="fullWidth"
          width={1440}
          height={920}
          quality={100}
          alt="hero bg"
        />
      </div>

      <div className="relative mx-auto mt-16 max-w-lg space-y-6 p-6 md:mt-40 md:max-w-2xl md:space-y-8 lg:px-8">
        {artifact1 && (
          <img
            src={artifact1}
            alt="Artifact"
            className={`mx-auto -mb-6 aspect-square h-full max-h-[240px] w-full max-w-[240px] md:absolute md:-left-[60px] md:top-[320px] md:mx-0 md:mb-0 lg:-left-[300px] lg:top-[180px] lg:max-h-[352px] lg:max-w-[352px] ${artifactAnimation}`}
            width={352}
            height={352}
          />
        )}
        {artifact2 && (
          <img
            src={artifact2}
            alt="Artifact"
            className={`hidden md:block aspect-square h-full max-h-[140px] w-full max-w-[140px] md:absolute md:-right-[40px] md:-top-[100px] lg:-right-[160px] lg:-top-[80px] lg:max-h-[180px] lg:max-w-[180px] ${artifactAnimation}`}
            width={180}
            height={180}
            style={{ animationDelay: "1500ms" }}
          />
        )}

        <Title variant="primary">{title}</Title>
        <p className="mx-auto max-w-lg text-center text-xl font-extralight text-secondary-dark md:font-light">
          {description}
        </p>
        {cta && (
          <div className="flex justify-center">
            <AppButton as="link" href="/contact">
              {ctaText}
            </AppButton>
          </div>
        )}

        {artifact2 && (
          <img
            src={artifact2}
            alt="Artifact"
            className={`mx-auto aspect-square h-full max-h-[140px] w-full max-w-[140px] md:hidden ${artifactAnimation}`}
            width={180}
            height={180}
            style={{ animationDelay: "1500ms" }}
          />
        )}
      </div>
    </section>
  );
};

export default HeroBanner2;
