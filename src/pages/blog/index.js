import React from "react";
import MainLayout from "../../components/layouts/main-layout";
import BlogBanner from "../../components/sections/blog/blog-banner";
import BlogListWithCategories from "../../components/sections/blog/blog-list-with-categories";
import BlogCTA from "../../components/sections/blog/blog-cta";

const BlogPage = () => {
  return (
    <MainLayout>
      <BlogBanner />
      <BlogListWithCategories />
      <BlogCTA />
    </MainLayout>
  );
};

export default BlogPage;
