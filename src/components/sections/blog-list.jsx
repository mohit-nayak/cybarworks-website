import React from "react";
import BlogPreviewCard from "../sections/blog-preview-card";
import AppButton from "../common/app-button";

const BlogList = ({ posts = [] }) => {
  return (
    <section className="space-y-10">
      <div className="gap-8 lg:grid lg:grid-cols-2 xl:grid-cols-3">
        {posts.map((post, index) => (
          <div className="lg:col-span-1">
            <BlogPreviewCard key={index} post={post} />
          </div>
        ))}
      </div>
      {posts.length > 0 ? (
        <div className="flex w-full items-center justify-center">
          <AppButton
            variant="primary"
            className="mx-auto max-w-max"
            childClassName="text-sm font-normal py-1 px-16"
          >
            Load more
          </AppButton>
        </div>
      ) : (
        <div className="text-center text-3xl text-secondary-dark">
          No blog posts!
        </div>
      )}
    </section>
  );
};

export default BlogList;
