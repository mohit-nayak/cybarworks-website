export const getTagsFromPosts = (posts = []) => {
  if (posts.length < 1) return [];

  const allTags = new Set();
  posts.forEach((post) => {
    post.frontmatter.tags.forEach((tag) => allTags.add(tag));
  });
  return Array.from(allTags);
};

export const tagNameToSlug = (tag = "") => {
  return tag.toLowerCase().trim().replaceAll(" ", "-");
};

export const getTagsSlug = (tags = []) => {
  return tags.map((tag) => tagNameToSlug(tag));
};
