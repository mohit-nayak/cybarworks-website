import React from "react";
import Title from "../common/title";
import AppButton from "../common/app-button";
import { StaticImage } from "gatsby-plugin-image";

const HowWeHelp = () => {
  return (
    <section className="py-6 md:py-16">
      <div className="mx-auto max-w-6xl px-8">
        <Title variant="secondary" className="px-6 md:mb-10 md:px-0">
          How we help businesses with IT?
        </Title>
        <div>
          <div className="grid grid-cols-1 items-center md:grid-cols-2">
            <div className="order-2 md:order-1 lg:grid-cols-1">
              <div className="mx-auto max-w-md space-y-4 md:mx-0 lg:space-y-7">
                <h4 className="text-center text-2xl font-light text-secondary-dark md:text-left md:text-3xl">
                  Managed IT Services
                </h4>
                <p className="text-center font-light text-secondary-dark md:text-left">
                  Keep your IT systems running smoothly with our comprehensive
                  support and maintenance solutions. Our team of experts ensures
                  efficient, secure, and reliable operations, allowing you to
                  focus on your core business activities.
                </p>
                <AppButton
                  as="link"
                  href="/services/it-services/"
                  className="mx-auto md:mx-0"
                  childClassName="px-10 py-1.5 text-base"
                >
                  Know More
                </AppButton>
              </div>
            </div>
            <div className="order-1 md:order-2 lg:grid-cols-1">
              <StaticImage
                src="../../assets/images/graphic-1.png"
                quality={100}
                formats={["png"]}
                className="mx-auto h-full max-h-[460px] w-full max-w-[460px] animate-pulse-float-5s"
                layout="fullWidth"
                width={460}
                height={460}
                alt="artifact"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 items-center md:grid-cols-2">
            <div className="order-2 lg:grid-cols-1">
              <div className="mx-auto max-w-md space-y-4 md:ml-auto lg:space-y-7">
                <h4 className="text-center text-2xl font-light text-secondary-dark md:text-left md:text-3xl">
                  Security Services
                </h4>
                <p className="text-center font-light text-secondary-dark md:text-left">
                  Protect your business from cyber threats with our robust
                  security solutions. We offer thorough assessments, monitoring,
                  and rapid response to keep your data and systems safe from
                  potential breaches and attacks.
                </p>
                <AppButton
                  as="link"
                  href="/services/security-services/"
                  className="mx-auto md:mx-0"
                  childClassName="px-10 py-1.5 text-base"
                >
                  Know More
                </AppButton>
              </div>
            </div>
            <div className="order-1 lg:grid-cols-1">
              <StaticImage
                src="../../assets/images/graphic-2.png"
                quality={100}
                formats={["png"]}
                className="mx-auto h-full max-h-[460px] w-full max-w-[460px] animate-pulse-float-5s"
                style={{ animationDelay: "1500ms" }}
                layout="fullWidth"
                width={460}
                height={460}
                alt="artifact"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 items-center md:grid-cols-2">
            <div className="order-2 md:order-1 lg:grid-cols-1">
              <div className="mx-auto max-w-md space-y-4 md:mx-0 lg:space-y-7">
                <h4 className="text-center text-2xl font-light text-secondary-dark md:text-left md:text-3xl">
                  Consulting
                </h4>
                <p className="text-center font-light text-secondary-dark md:text-left">
                  Get strategic guidance and expert advice on leveraging
                  technology to drive business growth. Our consulting services
                  help you optimize your IT infrastructure, implement innovative
                  solutions, to stay ahead of the competition.
                </p>
                <AppButton
                  as="link"
                  href="/services/consulting-services/"
                  className="mx-auto md:mx-0"
                  childClassName="px-10 py-1.5 text-base"
                >
                  Know More
                </AppButton>
              </div>
            </div>
            <div className="order-1 md:order-2 lg:grid-cols-1">
              <StaticImage
                src="../../assets/images/graphic-3.png"
                quality={100}
                formats={["png"]}
                className="mx-auto h-full max-h-[460px] w-full max-w-[460px] animate-pulse-float-5s"
                style={{ animationDelay: "3000ms" }}
                layout="fullWidth"
                width={460}
                height={460}
                alt="artifact"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;
