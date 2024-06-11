import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const NumberMetrics = () => {
  return (
    <section className="relative flex min-h-[440px] flex-col overflow-hidden py-6">
      <div className="absolute left-0 top-0 h-full w-full">
        <StaticImage
          src="../../assets/images/shadow-bg-1.png"
          quality={100}
          formats={["png"]}
          class="h-full min-h-[440px] w-full"
          layout="fullWidth"
          width={1440}
          height={440}
        />
      </div>
      <div className="relative mx-auto mt-auto max-w-6xl lg:grid lg:grid-cols-4 lg:gap-x-16">
        <div className="space-y-2 text-center lg:col-span-1">
          <div className="bg-secondary-gradient bg-clip-text text-center text-title-primary-sm font-normal text-transparent lg:text-title-primary-lg">
            28+
          </div>
          <p className="max-w-[180px] text-2xl">Years of experience</p>
        </div>
        <div className="space-y-2 text-center lg:col-span-1">
          <div className="bg-secondary-gradient bg-clip-text text-center text-title-primary-sm font-normal text-transparent lg:text-title-primary-lg">
            98%
          </div>
          <p className="max-w-[180px] text-2xl">IT issues resolved</p>
        </div>
        <div className="space-y-2 text-center lg:col-span-1">
          <div className="bg-secondary-gradient bg-clip-text text-center text-title-primary-sm font-normal text-transparent lg:text-title-primary-lg">
            500+
          </div>
          <p className="max-w-[180px] text-2xl">Clients served</p>
        </div>
        <div className="space-y-2 text-center lg:col-span-1">
          <div className="bg-secondary-gradient bg-clip-text text-center text-title-primary-sm font-normal text-transparent lg:text-title-primary-lg">
            35%
          </div>
          <p className="max-w-[180px] text-2xl">ROI of Clients</p>
        </div>
      </div>
    </section>
  );
};

export default NumberMetrics;
