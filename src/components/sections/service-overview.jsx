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
    <section className={`py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <Title variant="secondary" className="mb-20">
          {title}
        </Title>

        <div className="items-center lg:grid lg:grid-cols-2">
          <div className="lg:grid-cols-1">
            <div className="max-w-md space-y-7">
              <h4 className="bg-secondary-gradient-semi-dark bg-clip-text text-3xl font-extralight italic text-transparent">
                "{tagline}"
              </h4>
              {descriptionList.map((description, index) => (
                <p key={index}>{description}</p>
              ))}
            </div>
          </div>
          <div className="lg:grid-cols-1">
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
