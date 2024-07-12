import React from "react";
import AppButton from "../common/app-button";
import { tagNameToSlug } from "../../utils/tags";

const BlogCategories = ({ allTags = [], activeCategory }) => {
  return (
    <div className="grid grid-cols-2 justify-center gap-4 lg:gap-6 md:pr-4 lg:flex lg:flex-col xl:pr-10">
      <AppButton
        as="link"
        variant={activeCategory ? "secondary" : "primary"}
        href={`/blog#posts`}
        className="col-span-1 mx-auto !w-full sm:max-w-xs md:max-w-full"
        childClassName="text-center lg:max-w-xs"
      >
        All Blogs
      </AppButton>
      {allTags.map((tag) => (
        <AppButton
          key={tag}
          as="link"
          variant={
            activeCategory === tagNameToSlug(tag) ? "primary" : "secondary"
          }
          href={`/blog?category=${tagNameToSlug(tag)}#posts`}
          className="col-span-1 mx-auto !w-full sm:max-w-xs md:max-w-full"
          childClassName="text-center lg:max-w-xs"
        >
          {tag}
        </AppButton>
      ))}
    </div>
  );
};

export default BlogCategories;
