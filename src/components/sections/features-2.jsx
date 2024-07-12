import React from "react";
import Title from "../common/title";

const Features2 = ({ className = "", title = "", featuresList = [] }) => {
  return (
    <section className={`px-8 py-12 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <Title variant="secondary" className="mb-10 lg:mb-24">
          {title}
        </Title>
        <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2 md:gap-8 lg:gap-12">
          {featuresList.map((feature, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-full bg-secondary-gradient p-[1px] lg:col-span-1"
            >
              <div className="absolute inset-0 bg-secondary-gradient-light" />
              <span className="flex w-full flex-col rounded-full bg-primary-dark px-6 py-3 text-center text-xl font-light text-secondary-dark lg:px-12 lg:py-5 lg:text-2xl">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features2;
