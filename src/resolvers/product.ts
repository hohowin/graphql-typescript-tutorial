export const product = {
  category: ({ categoryId }, _, { db }) => {
    const { categories } = db;
    return categories.find((c) => {
      return c.id === categoryId;
    });
  },

  reviews: ({ id }, _, { db }) => {
    const { reviews } = db;
    return reviews.filter((r) => {
      return r.productId === id;
    });
  },
};
