import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Title from "../common/title";
import FacebookIcon from "../icons/facebook";
import XIcon from "../icons/x";
import GooglePlusIcon from "../icons/google-plus";
import InstagramIcon from "../icons/instagram";

const SocialBanner = ({ title = "" }) => {
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
      <div className="relative -top-24 mx-auto max-w-3xl space-y-10 p-6 lg:top-0 lg:px-8">
        <Title variant="primary">{title}</Title>
        <div className="mx-auto flex max-w-max items-center gap-4 md:gap-10">
          <Link to="https://google.com" target="_blank">
            <FacebookIcon className="aspect-square h-16 w-16 md:h-20 md:w-20" />
          </Link>
          <Link to="https://google.com" target="_blank">
            <XIcon className="aspect-square h-16 w-16 md:h-20 md:w-20" />
          </Link>
          <Link to="https://google.com" target="_blank">
            <GooglePlusIcon className="aspect-square h-16 w-16 md:h-20 md:w-20" />
          </Link>
          <Link to="https://google.com" target="_blank">
            <InstagramIcon className="aspect-square h-16 w-16 md:h-20 md:w-20" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SocialBanner;
