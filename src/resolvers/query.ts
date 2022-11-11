export const query = {
  hello: (): string[] => {
    return ["Joy", "To", "The", "World!"];
  },

  products: (_parents, { filter }, { db }): any[] => {
    const { products } = db;
    let filtered = products;

    if (filter) {
      if (filter.onSale === true) {
        filtered = filtered.filter((p) => {
          return p.onSale;
        });
      }
    }

    return filtered;
  },

  product: (_parent, { id }, { db }) => {
    const { products } = db;
    return products.find((p) => {
      return p.id === id;
    });
  },

  categories: (_parent, _args, { db }): any[] => {
    const { categories } = db;
    return categories;
  },

  category: (_parent, { id }, { db }) => {
    const { categories } = db;
    return categories.find((c) => {
      return c.id === id;
    });
  },
};
