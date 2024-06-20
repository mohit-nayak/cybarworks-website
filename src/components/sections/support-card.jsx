import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import AppButton from "../common/app-button";

const SupportCard = ({
  mainIcon,
  title = "",
  description = "",
  actionBtnText = "",
  actionBtnHref = "",
}) => {
  return (
    <div className="rounded-2xl bg-primary-gradient p-[1px]">
      <div className="relative rounded-2xl bg-primary-dark px-11 py-14 text-lg font-light text-secondary-dark">
        <div className="absolute left-0 top-0 h-full w-full">
          <StaticImage
            src="../../assets/images/shadow-bg-2.png"
            formats={["png"]}
            className="h-full w-full"
            layout="fullWidth"
            width={220}
            height={182}
            quality={100}
            alt="shadow"
          />
        </div>
        <div className="absolute left-0 top-0 h-full w-full bg-secondary-gradient-light" />
        <div className="relative flex h-full min-h-[420px] flex-col items-center justify-center">
          <mainIcon.IconEle className="mb-12 aspect-auto w-24" />
          <div className="text-2xl text-center">{title}</div>
          <p className="mt-6 text-center text-base font-extralight">
            {description}
          </p>
          <AppButton
            as="link"
            variant="primary"
            href={actionBtnHref}
            className="mt-auto"
            childClassName="bg-none overflow-hidden"
          >
            <div className="absolute left-0 top-0 h-full w-full bg-secondary-gradient-light" />
            {actionBtnText}
          </AppButton>
        </div>
      </div>
    </div>
  );
};

export default SupportCard;
