import React from "react";
import BlogList from "../blog-list";

const BlogListWithCategories = () => {
  return (
    <section className="mx-auto max-w-7xl pb-16">
      <div className="lg:grid lg:grid-cols-12">
        <div className="lg:col-span-3">
          <h5 className="text-2xl text-secondary-dark">Categories</h5>
        </div>
        <div className="lg:col-span-9">
          <BlogList />
        </div>
      </div>
    </section>
  );
};

export default BlogListWithCategories;
