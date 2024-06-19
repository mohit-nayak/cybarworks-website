export const getCategoryNameBySlug = (categories, slug) => {
  const category = categories.find((item) => item.slug === slug);
  return category?.name;
};
