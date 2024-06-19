import React from "react";
import { categories } from "../../data/blog-data";
import AppButton from "../common/app-button";

const BlogCategories = () => {
  return (
    <div className="flex flex-col justify-center gap-6 pr-10">
      <AppButton
        as="link"
        variant="secondary"
        href={`/blog`}
        childClassName="text-center max-w-xs"
      >
        All Blogs
      </AppButton>
      {categories.map((category) => (
        <AppButton
          key={category.slug}
          as="link"
          variant="secondary"
          href={`/blog?category=${category.slug}`}
          childClassName="text-center max-w-xs"
        >
          {category.name}
        </AppButton>
      ))}
    </div>
  );
};

export default BlogCategories;
