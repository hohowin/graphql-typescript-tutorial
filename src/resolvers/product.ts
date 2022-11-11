export const product = {
  category: ({ categoryId }, _, { db }) => {
    const { categories }: { categories: [any] } = db;
    return categories.find((c) => {
      return c.id === categoryId;
    });
  },

  reviews: ({ id }, _, { db }) => {
    const { reviews }: { reviews: [any] } = db;
    return reviews.filter((r) => {
      return r.productId === id;
    });
  },
};
