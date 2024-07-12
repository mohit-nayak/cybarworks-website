import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import AppButton from "../common/app-button";
import FacebookIcon from "../icons/facebook";
import XIcon from "../icons/x";
import GooglePlusIcon from "../icons/google-plus";
import InstagramIcon from "../icons/instagram";
import footerData from "../../data/footer-data";
import LocationIcon from "../icons/location-pin";
import EmailIcon from "../icons/envelope";
import CallIcon from "../icons/telephone";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative flex max-h-full min-h-[435px] flex-col overflow-hidden pt-10 md:pt-0">
      <div className="absolute top-0 hidden h-full w-full md:block">
        <StaticImage
          src="../../assets/images/footer-bg.png"
          formats={["png"]}
          className="h-full w-full"
          layout="fullWidth"
          width={1440}
          height={1248}
          quality={100}
          alt="bg"
        />
      </div>
      <div className="absolute top-0 h-full w-full md:hidden">
        <StaticImage
          src="../../assets/images/footer-bg-mobile.png"
          formats={["png"]}
          className="h-full w-full"
          layout="fullWidth"
          width={480}
          height={840}
          quality={100}
          alt="bg"
        />
      </div>

      <div className="relative mx-auto mb-0 mt-auto w-full max-w-6xl md:mb-10">
        <div className="px-8 lg:flex lg:justify-between lg:px-0">
          <div className="max-w-max lg:w-2/5">
            <Link to="/" className="flex">
              <span className="sr-only">Your Company</span>
              <img
                className="h-auto w-48 lg:mx-auto"
                src={footerData.logo}
                alt={footerData.logoAlt}
              />
            </Link>
            <p className="mt-2 text-base font-light text-secondary-semi-light lg:text-center">
              {footerData.tagline}
            </p>
            <div className="mx-auto mb-8 mt-6 flex max-w-max items-center gap-4 lg:mb-0 lg:mt-6">
              <Link to={footerData.socialLinks.facebook} target="_blank">
                <FacebookIcon className="aspect-square h-10 w-10" />
              </Link>
              <Link to={footerData.socialLinks.x} target="_blank">
                <XIcon className="aspect-square h-10 w-10" />
              </Link>
              <Link to={footerData.socialLinks.googlePlus} target="_blank">
                <GooglePlusIcon className="aspect-square h-10 w-10" />
              </Link>
              <Link to={footerData.socialLinks.instagram} target="_blank">
                <InstagramIcon className="aspect-square h-10 w-10" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:flex lg:gap-x-20 lg:gap-y-20">
            <div>
              <h5 className="mb-2 text-base font-normal uppercase text-secondary-semi-light lg:mb-5 lg:font-light">
                Navigate to
              </h5>
              <div className="flex flex-col gap-3">
                {footerData.navigation.map((item, index) => (
                  <Link
                    key={index}
                    to={item.url}
                    className="text-base font-light text-secondary-semi-light hover:text-tertiary-dark"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h5 className="mb-2 text-base font-normal uppercase text-secondary-semi-light lg:mb-5 lg:font-light">
                Check our services
              </h5>
              <div className="flex flex-col gap-3">
                {footerData.services.map((item, index) => (
                  <Link
                    key={index}
                    to={item.url}
                    className="text-base font-light text-secondary-semi-light hover:text-tertiary-dark"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-span-2 space-y-2 md:col-span-1 lg:space-y-4">
              <Link
                to={`callto:${footerData.contact.call}`}
                className="group flex items-center gap-3 text-secondary-semi-light hover:text-tertiary-dark"
              >
                <CallIcon className="aspect-square h-5 w-5 fill-secondary-semi-light group-hover:fill-tertiary-dark" />
                {footerData.contact.call}
              </Link>
              <Link
                to={`mailto:${footerData.contact.email}`}
                className="group flex items-center gap-3 text-secondary-semi-light hover:text-tertiary-dark"
              >
                <EmailIcon className="aspect-square h-5 w-5 fill-secondary-semi-light group-hover:fill-tertiary-dark" />
                {footerData.contact.email}
              </Link>
              <Link
                to={footerData.contact.location.googleMapLink}
                target="_blank"
                className="group flex items-center gap-3 font-light text-secondary-semi-light hover:text-tertiary-dark"
              >
                <LocationIcon className="aspect-square h-5 w-5 fill-secondary-semi-light group-hover:fill-tertiary-dark" />
                <div>
                  {footerData.contact.location.address.map(
                    (locationPart, index) => (
                      <div key={index}>{locationPart}</div>
                    ),
                  )}
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 px-0 md:mt-16 md:px-8">
          <div className="flex flex-col items-center justify-between gap-10 md:flex-row-reverse md:gap-0">
            <AppButton
              variant="primary"
              childClassName="!px-8 py-2 text-sm font-light"
              onClick={handleScrollToTop}
            >
              Back to top
            </AppButton>
            <div className="gradien relative w-full px-3 py-6 text-center text-sm text-secondary-semi-light sm:text-base md:w-auto md:px-0 md:py-0 md:text-left">
              <div className="absolute inset-0 z-10 bg-secondary-dark opacity-10 backdrop-blur-md transition-opacity duration-500 ease-primary md:hidden" />
              <div className="relative z-20">
                <p className="relative">{footerData.copyright}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
