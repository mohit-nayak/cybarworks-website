import React from "react";
import AppButton from "../common/app-button";
import { tagNameToSlug } from "../../utils/tags";

const BlogCategories = ({ allTags = [], activeCategory }) => {
  return (
    <div className="flex flex-col justify-center gap-6 pr-10">
      <AppButton
        as="link"
        variant={activeCategory ? "secondary" : "primary"}
        href={`/blog#posts`}
        className="!w-full"
        childClassName="text-center max-w-xs"
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
          className="!w-full"
          childClassName="text-center max-w-xs"
        >
          {tag}
        </AppButton>
      ))}
    </div>
  );
};

export default BlogCategories;
