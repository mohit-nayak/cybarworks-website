import React from "react";
import Title from "../common/title";

const ServiceOverview = ({
  className = "",
  title = "",
  tagline = "",
  descriptionList = [],
  image = "",
  imageAlt = "",
}) => {
  return (
    <section className={`py-10 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-8">
        <Title variant="secondary" className="mb-6 md:mb-10 md:px-0">
          {title}
        </Title>

        <div className="grid grid-cols-1 items-center md:grid-cols-2">
          <div className="order-2 md:order-1 lg:grid-cols-1">
            <div className="mx-auto max-w-md space-y-7 md:mx-0">
              <h4 className="bg-secondary-gradient-semi-dark bg-clip-text text-center text-xl font-extralight italic text-transparent md:text-left md:text-2xl lg:text-3xl">
                "{tagline}"
              </h4>
              {descriptionList.map((description, index) => (
                <p key={index}>{description}</p>
              ))}
            </div>
          </div>
          <div className="order-1 mb-6 md:order-2 md:mb-0 lg:grid-cols-1">
            <img
              src={image}
              alt={imageAlt}
              className="mx-auto h-full max-h-[544px] w-full max-w-[444px]"
              width={444}
              height={544}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
