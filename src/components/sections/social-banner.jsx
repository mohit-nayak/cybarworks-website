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
    <section className="relative flex h-[1174px] max-h-full items-center justify-center overflow-hidden">
      <div className="absolute top-0 h-full w-full">
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
      <div className="relative mx-auto max-w-3xl space-y-10 p-6 lg:px-8">
        <Title variant="primary">{title}</Title>
        <div className="mx-auto flex max-w-max items-center gap-10">
          <Link to="https://google.com" target="_blank">
            <FacebookIcon className="aspect-square h-20 w-20" />
          </Link>
          <Link to="https://google.com" target="_blank">
            <XIcon className="aspect-square h-20 w-20" />
          </Link>
          <Link to="https://google.com" target="_blank">
            <GooglePlusIcon className="aspect-square h-20 w-20" />
          </Link>
          <Link to="https://google.com" target="_blank">
            <InstagramIcon className="aspect-square h-20 w-20" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SocialBanner;
