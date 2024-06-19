import React from "react";
import BlogList from "../blog-list";
import BlogCategories from "../blog-categories";
import blogData from "../../../data/blog-data";

const BlogListWithCategories = ({ activeCategory }) => {
  let posts = blogData;
  if (activeCategory) {
    posts = blogData.filter((post) => post.category === activeCategory);
  }

  console.log("params", activeCategory);

  return (
    <section className="mx-auto max-w-7xl pb-16">
      <div className="lg:grid lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-3">
          <BlogCategories />
        </div>
        <div className="lg:col-span-9">
          <BlogList posts={posts} />
        </div>
      </div>
    </section>
  );
};

export default BlogListWithCategories;
