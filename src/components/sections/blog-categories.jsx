import React from "react";
import AppButton from "../common/app-button";
import { tagNameToSlug } from "../../utils/tags";

const BlogCategories = ({ allTags = [] }) => {
  return (
    <div className="flex flex-col justify-center gap-6 pr-10">
      <AppButton
        as="link"
        variant="secondary"
        href={`/blog#posts`}
        childClassName="text-center max-w-xs"
      >
        All Blogs
      </AppButton>
      {allTags.map((tag) => (
        <AppButton
          key={tag}
          as="link"
          variant="secondary"
          href={`/blog?category=${tagNameToSlug(tag)}#posts`}
          childClassName="text-center max-w-xs"
        >
          {tag}
        </AppButton>
      ))}
    </div>
  );
};

export default BlogCategories;
