import { getTagsSlug } from "./tags";

export const getPostsByTag = (posts = [], tag) => {
  let filteredPosts = posts;
  if (tag) {
    filteredPosts = posts.filter((post) => {
      const tags = getTagsSlug(post?.frontmatter?.tags ?? []);
      return tags.indexOf(tag) > -1;
    });
  }
  return filteredPosts;
};
