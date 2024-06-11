import React from "react";
import Title from "../common/title";
import AppButton from "../common/app-button";
import { StaticImage } from "gatsby-plugin-image";

const HowWeHelp = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl">
        <Title variant="secondary" className="mb-10">
          How we help businesses with IT?
        </Title>
        <div>
          <div className="items-center lg:grid lg:grid-cols-2">
            <div className="lg:grid-cols-1">
              <div className="max-w-md space-y-7">
                <h4 className="text-3xl font-light text-secondary-dark">
                  Managed IT Services
                </h4>
                <p className="font-light text-secondary-dark">
                  Keep your IT systems running smoothly with our comprehensive
                  support and maintenance solutions. Our team of experts ensures
                  efficient, secure, and reliable operations, allowing you to
                  focus on your core business activities.
                </p>
                <AppButton childClassName="px-10 py-1.5 text-base">
                  Know More
                </AppButton>
              </div>
            </div>
            <div className="lg:grid-cols-1">
              <StaticImage
                src="../../assets/images/graphic-1.png"
                quality={100}
                formats={["png"]}
                class="mx-auto h-full max-h-[460px] w-full max-w-[460px] animate-pulse-5s"
                layout="fullWidth"
                width={460}
                height={460}
              />
            </div>
          </div>
          <div className="items-center lg:grid lg:grid-cols-2">
            <div className="lg:order-2 lg:grid-cols-1">
              <div className="ml-auto max-w-md space-y-7">
                <h4 className="text-3xl font-light text-secondary-dark">
                  Security Services
                </h4>
                <p className="font-light text-secondary-dark">
                  Protect your business from cyber threats with our robust
                  security solutions. We offer thorough assessments, monitoring,
                  and rapid response to keep your data and systems safe from
                  potential breaches and attacks.
                </p>
                <AppButton childClassName="px-10 py-1.5 text-base">
                  Know More
                </AppButton>
              </div>
            </div>
            <div className="lg:order-1 lg:grid-cols-1">
              <StaticImage
                src="../../assets/images/graphic-2.png"
                quality={100}
                formats={["png"]}
                class="mx-auto h-full max-h-[460px] w-full max-w-[460px] animate-pulse-5s"
                style={{ animationDelay: "1500ms" }}
                layout="fullWidth"
                width={460}
                height={460}
              />
            </div>
          </div>
          <div className="items-center lg:grid lg:grid-cols-2">
            <div className="lg:grid-cols-1">
              <div className="max-w-md space-y-7">
                <h4 className="text-3xl font-light text-secondary-dark">
                  Consulting
                </h4>
                <p className="font-light text-secondary-dark">
                  Get strategic guidance and expert advice on leveraging
                  technology to drive business growth. Our consulting services
                  help you optimize your IT infrastructure, implement innovative
                  solutions, to stay ahead of the competition.
                </p>
                <AppButton childClassName="px-10 py-1.5 text-base">
                  Know More
                </AppButton>
              </div>
            </div>
            <div className="lg:grid-cols-1">
              <StaticImage
                src="../../assets/images/graphic-3.png"
                quality={100}
                formats={["png"]}
                class="mx-auto h-full max-h-[460px] w-full max-w-[460px] animate-pulse-5s"
                style={{ animationDelay: "3000ms" }}
                layout="fullWidth"
                width={460}
                height={460}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;
