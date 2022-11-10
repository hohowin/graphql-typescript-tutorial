export const category = {
  products: ({ id }, { filter }, { db }) => {
    const { products } = db;
    const catProducts = products.filter((p) => {
      return p.categoryId === id;
    });

    let filtered = catProducts;

    if (filter) {
      if (filter.onSale === true) {
        filtered = filtered.filter((p) => {
          return p.onSale;
        });
      }
    }

    return filtered;
  },
};
