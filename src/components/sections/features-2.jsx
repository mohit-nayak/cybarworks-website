import React from "react";
import Title from "../common/title";

const Features2 = ({ className = "", title = "", featuresList = [] }) => {
  return (
    <section className={`py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <Title variant="secondary" className="mb-24">
          {title}
        </Title>
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          {featuresList.map((feature, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-full bg-secondary-gradient p-[1px] lg:col-span-1"
            >
              <div className="absolute inset-0 bg-secondary-gradient-light" />
              <span className="flex w-full flex-col rounded-full bg-primary-dark px-12 py-5 text-center text-2xl font-light text-secondary-dark">
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
