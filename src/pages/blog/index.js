import React from "react";
import MainLayout from "../../components/layouts/main-layout";
import BlogBanner from "../../components/sections/blog/blog-banner";
import BlogListWithCategories from "../../components/sections/blog/blog-list-with-categories";
import BlogCTA from "../../components/sections/blog/blog-cta";

const BlogPage = ({ location }) => {
  const params = new URLSearchParams(location.search);
  const activeCategory = params.get("category");

  return (
    <MainLayout>
      <BlogBanner />
      <BlogListWithCategories activeCategory={activeCategory} />
      <BlogCTA />
    </MainLayout>
  );
};

export default BlogPage;
