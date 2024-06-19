import React from "react";
import BlogList from "../blog-list";
import BlogCategories from "../blog-categories";
import blogData from "../../../data/blog-data";

const BlogListWithCategories = ({ activeCategory }) => {
  let posts = blogData;
  if (activeCategory) {
    posts = blogData.filter((post) => post.category.slug === activeCategory);
  }

  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden pb-16">
      <div className="lg:grid lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-3">
          <BlogCategories />
        </div>
        <div className="lg:col-span-9">
          <BlogList posts={posts} activeCategory={activeCategory} />
        </div>
      </div>

      {/* To scroll to blog section with offset */}
      <div
        className="invisible absolute -top-48 h-3 w-full bg-white"
        id="posts"
      />
    </section>
  );
};

export default BlogListWithCategories;
