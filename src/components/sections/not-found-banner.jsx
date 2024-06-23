import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Title from "../common/title";
import AppButton from "../common/app-button";

const NotFoundBanner = () => {
  return (
    <section className="relative flex h-[1174px] max-h-full justify-center overflow-hidden">
      <div className="absolute top-0 h-full w-full">
        <StaticImage
          src="../../assets/images/not-found-banner-bg.png"
          formats={["png"]}
          className="h-full w-full"
          layout="fullWidth"
          width={1440}
          height={928}
          quality={100}
          alt="bg"
        />
      </div>
      <div className="relative mx-auto mt-40 max-w-3xl space-y-8 p-6 lg:px-8">
        <Title variant="primary" className="lg:text-9xl xl:text-[170px]">
          404
        </Title>
        <p className="mb-11 mt-8 text-center text-3xl">Page not found</p>
        <div className="flex justify-center">
          <AppButton as="link" href="/" childClassName="lg:px-12">
            Go To Home
          </AppButton>
        </div>
      </div>
    </section>
  );
};

export default NotFoundBanner;
