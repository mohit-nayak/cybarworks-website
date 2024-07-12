import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const NumberMetrics = ({ metrics = [] }) => {
  return (
    <section className="relative flex min-h-[700px] flex-col overflow-hidden py-6 md:min-h-[350px] lg:min-h-[440px]">
      <div className="absolute left-0 top-0 hidden h-full w-full md:block">
        <StaticImage
          src="../../assets/images/shadow-bg-1.png"
          quality={100}
          formats={["png"]}
          className="h-full min-h-[440px] w-full animate-pulse-float-5s"
          layout="fullWidth"
          width={1440}
          height={440}
          alt="shadow"
        />
      </div>
      <div className="absolute right-0 h-full w-auto md:hidden">
        <StaticImage
          src="../../assets/images/shadow-bg-3.png"
          quality={100}
          formats={["png"]}
          className="h-full min-h-[700px] w-full animate-pulse-float-5s md:min-h-[440px]"
          width={214}
          height={700}
          alt="shadow"
        />
      </div>
      <div className="absolute left-0 h-full w-auto rotate-180 md:hidden">
        <StaticImage
          src="../../assets/images/shadow-bg-3.png"
          quality={100}
          formats={["png"]}
          className="h-full min-h-[700px] w-full animate-pulse-float-5s md:min-h-[440px]"
          width={214}
          height={700}
          alt="shadow"
        />
      </div>
      <div className="relative mx-auto my-auto grid max-w-6xl grid-cols-1 gap-12 px-8 md:my-0 md:mt-auto md:grid-cols-4 md:gap-x-16">
        {metrics.map((metric, index) => (
          <div key={index} className="space-y-2 text-center lg:col-span-1">
            <div className="bg-secondary-gradient bg-clip-text text-center text-title-primary-sm font-normal text-transparent lg:text-title-primary-lg">
              {metric.value}
            </div>
            <p className="max-w-[200px] text-lg lg:max-w-[180px] lg:text-2xl">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NumberMetrics;
