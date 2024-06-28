import React from "react";
import BlogList from "../blog-list";
import BlogCategories from "../blog-categories";
import { getTagsFromPosts } from "../../../utils/tags";
import { getPostsByTag } from "../../../utils/post";

const BlogListWithCategories = ({ posts = [], activeCategory }) => {
  const allTags = getTagsFromPosts(posts);
  const postsByActiveTag = getPostsByTag(posts, activeCategory);

  return (
    <section className="relative mx-auto max-w-6xl overflow-hidden pb-16 xl:max-w-7xl">
      <div className="gap-6 px-6 lg:grid lg:grid-cols-12 xl:gap-10">
        <div className="lg:col-span-3">
          <BlogCategories allTags={allTags} activeCategory={activeCategory} />
        </div>
        <div className="lg:col-span-9">
          <BlogList posts={postsByActiveTag} activeCategory={activeCategory} />
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
