import React from "react";
import BlogList from "../blog-list";
import BlogCategories from "../blog-categories";
import { getTagsFromPosts, getTagsSlug } from "../../../utils/tags";
import { getPostsByTag } from "../../../utils/post";

const BlogListWithCategories = ({ posts = [], activeCategory }) => {
  const allTags = getTagsFromPosts(posts);
  const postsByActiveTag = getPostsByTag(posts, activeCategory);

  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden pb-16">
      <div className="lg:grid lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-3">
          <BlogCategories allTags={allTags} />
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
