import React, { useEffect, useState } from "react";
import BlogPreviewCard from "../sections/blog-preview-card";
import AppButton from "../common/app-button";

const loadMorePostsCount = 6;

const BlogList = ({ posts = [], activeCategory }) => {
  const [postsLimit, setPostsLimit] = useState(loadMorePostsCount);
  const visiblePosts = posts.slice(0, postsLimit);

  const showLoadMoreButton = visiblePosts.length < posts.length;

  const handleLoadMorePosts = () => {
    const remaining = posts.length - visiblePosts.length;
    setPostsLimit((prev) => {
      if (remaining > loadMorePostsCount) return prev + loadMorePostsCount;
      return prev + remaining;
    });
  };

  useEffect(() => {
    setPostsLimit(loadMorePostsCount);
  }, [activeCategory]);

  return (
    <section className="space-y-10">
      <div className="gap-8 lg:grid lg:grid-cols-2 xl:grid-cols-3">
        {visiblePosts.map((post, index) => (
          <div className="lg:col-span-1">
            <BlogPreviewCard key={index} post={post} />
          </div>
        ))}
      </div>
      {showLoadMoreButton && (
        <div className="flex w-full items-center justify-center">
          <AppButton
            variant="primary"
            className="mx-auto max-w-max"
            childClassName="text-sm font-normal py-1 px-16"
            onClick={handleLoadMorePosts}
          >
            Load more
          </AppButton>
        </div>
      )}
      {posts.length < 1 && (
        <div className="text-center text-3xl text-secondary-dark">
          No blog posts!
        </div>
      )}
    </section>
  );
};

export default BlogList;
