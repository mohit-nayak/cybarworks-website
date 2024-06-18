import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import AppButton from "../common/app-button";

const BlogPreviewCard = ({ post }) => {
  return (
    <div className="rounded-[20px] bg-secondary-gradient p-[1px] font-semibold">
      <div className="relative flex w-full flex-col overflow-hidden rounded-[20px] bg-primary-dark text-lg font-light text-secondary-dark">
        <div className="absolute left-0 top-0 h-full w-full">
          <StaticImage
            src="../../assets/images/shadow-bg-2.png"
            formats={["png"]}
            class="h-full w-full"
            layout="fullWidth"
            width={220}
            height={182}
            quality={100}
          />
        </div>
        <div className="relative flex min-h-[465px] flex-col bg-secondary-gradient-light">
          <img
            src={post.thumbnail}
            alt={post.title}
            className="h-[200px] w-full object-cover"
            width={360}
            height={200}
          />
          <div className="flex flex-1 flex-col justify-between px-7 pb-10 pt-5">
            <div>
              <div className="mb-3 flex items-center justify-between text-base text-secondary-light opacity-70">
                <span>#{post.category}</span>
                <span>{post.date}</span>
              </div>
              <h5 className="mb-8 line-clamp-3 text-xl">{post.title}</h5>
            </div>
            <AppButton
              as="link"
              href="/"
              variant="primary"
              className="mx-auto max-w-max"
              childClassName="text-sm font-normal py-1 px-8"
            >
              Read More
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPreviewCard;
