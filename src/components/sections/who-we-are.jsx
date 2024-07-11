import React from "react";
import Title from "../common/title";
import AppButton from "../common/app-button";
import { StaticImage } from "gatsby-plugin-image";

const WhoWeAre = ({ className = "" }) => {
  return (
    <section className={`py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-8">
        <Title variant="secondary" className="mb-4 md:mb-20">
          Who are we?
        </Title>

        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-0">
          <div className="order-2 md:order-1 lg:grid-cols-1">
            <div className="mx-auto max-w-md space-y-7 lg:mx-0">
              <h4 className="bg-secondary-gradient-semi-dark bg-clip-text text-center text-2xl font-extralight italic text-transparent md:text-left md:text-3xl">
                "We empower small to mid size businesses with innovative IT
                solutions."
              </h4>
              <p>
                Since 1996 CybrarWorks is diligently providing tailored IT
                solutions for businesses. Our mission is to empower your
                business with efficient and effective technology solutions that
                drive growth and success.
              </p>
              <p>
                Our vision at CybarWorks is to revolutionize the way businesses
                approach technology. With CybarWorks as your IT partner, you can
                focus on what you do best while we take care of your technology
                needs.
              </p>
              <AppButton as="link" href="/contact" className="mx-auto md:mx-0">
                Connect With Us
              </AppButton>
            </div>
          </div>
          <div className="order-1 md:order-2 lg:grid-cols-1">
            <StaticImage
              src="../../assets/images/team-1.png"
              quality={100}
              formats={["png"]}
              className="mx-auto h-full max-h-[544px] w-full max-w-[444px]"
              layout="fullWidth"
              width={444}
              height={544}
              alt="who we are"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
