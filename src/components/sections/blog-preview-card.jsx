import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import AppButton from "../common/app-button";

const BlogPreviewCard = ({ post }) => {
  const bannerImg = getImage(
    post?.banner?.filename?.childImageSharp?.gatsbyImageData,
  );

  console.log("data", bannerImg);


  return (
    <div className="rounded-[20px] bg-secondary-gradient p-[1px] font-semibold">
      <div className="relative flex w-full flex-col overflow-hidden rounded-[20px] bg-primary-dark text-lg font-light text-secondary-dark">
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
        <div className="relative flex min-h-[465px] flex-col bg-secondary-gradient-light">
          <GatsbyImage
            image={bannerImg}
            alt={post?.banner?.alt}
            className="h-[200px] w-full object-cover"
            width={360}
            height={200}
          />
          <div className="flex flex-1 flex-col justify-between px-7 pb-8 pt-5">
            <div>
              <div className="mb-3 flex items-start justify-between gap-2 text-base text-secondary-light opacity-70">
                <div className="flex flex-col">
                  <span className="line-clamp-1">#{post?.tags?.[0]}</span>
                  {post?.tags?.length > 1 && (
                    <span className="cursor-pointer text-xs italic underline">
                      See all tags
                    </span>
                  )}
                </div>
                <span className="whitespace-nowrap">{post.pubDate}</span>
              </div>
              <h5 className="mb-8 line-clamp-3 text-xl">{post.title}</h5>
            </div>
            <AppButton
              as="link"
              href={post?.url ?? "#posts"}
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
