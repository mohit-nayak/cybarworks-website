import React from "react";

const Features1 = ({ mainImgSrc, mainImgAlt = "", data = [] }) => {
  if (data.length < 5) return;

  return (
    <>
      {/* Desktop view */}
      <section className="hidden items-start justify-between px-8 md:flex">
        <div className="space-y-40">
          <div className="max-w-[220px] space-y-2">
            <h6 className="text-2xl font-light text-secondary-dark">
              {data[0].title}
            </h6>
            <p>{data[0].description}</p>
          </div>
          <div className="max-w-[220px] space-y-2">
            <h6 className="text-2xl font-light text-secondary-dark">
              {data[1].title}
            </h6>
            <p>{data[1].description}</p>
          </div>
        </div>
        <div className="space-y-20">
          <img
            src={mainImgSrc}
            alt={mainImgAlt}
            className="h-full max-h-[420px] w-full max-w-[420px] animate-pulse-float-5s"
          />
          <div className="mx-auto max-w-[220px] space-y-2">
            <h6 className="text-2xl font-light text-secondary-dark">
              {data[2].title}
            </h6>
            <p>{data[2].description}</p>
          </div>
        </div>
        <div className="space-y-40">
          <div className="max-w-[220px] space-y-2">
            <h6 className="text-2xl font-light text-secondary-dark">
              {data[3].title}
            </h6>
            <p>{data[3].description}</p>
          </div>
          <div className="max-w-[220px] space-y-2">
            <h6 className="text-2xl font-light text-secondary-dark">
              {data[4].title}
            </h6>
            <p>{data[4].description}</p>
          </div>
        </div>
      </section>

      {/* Mobile view */}
      <section className="px-8 md:hidden">
        <img
          src={mainImgSrc}
          alt={mainImgAlt}
          className="mx-auto mb-10 h-full max-h-[260px] w-full max-w-[260px] animate-pulse-float-5s"
        />
        <div className="grid grid-cols-2 gap-x-8 gap-y-12">
          <div className="col-span-1 max-w-[220px] space-y-2">
            <h6 className="text-xl font-light text-secondary-dark">
              {data[0].title}
            </h6>
            <p className="font-extralight">{data[0].description}</p>
          </div>
          <div className="col-span-1 max-w-[220px] space-y-2">
            <h6 className="text-xl font-light text-secondary-dark">
              {data[1].title}
            </h6>
            <p className="font-extralight">{data[1].description}</p>
          </div>
          <div className="col-span-1 max-w-[220px] space-y-2">
            <h6 className="text-xl font-light text-secondary-dark">
              {data[2].title}
            </h6>
            <p className="font-extralight">{data[2].description}</p>
          </div>
          <div className="col-span-1 max-w-[220px] space-y-2">
            <h6 className="text-xl font-light text-secondary-dark">
              {data[3].title}
            </h6>
            <p className="font-extralight">{data[3].description}</p>
          </div>
          <div className="col-span-2 mx-auto max-w-[220px] space-y-2">
            <h6 className="text-xl font-light text-secondary-dark">
              {data[4].title}
            </h6>
            <p className="font-extralight">{data[4].description}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features1;
