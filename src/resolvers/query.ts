export const query = {
  hello: () => {
    return ["Joy", "To", "The", "World!"];
  },

  products: (_parents, { filter }, { products }) => {
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

  product: (_parent, { id }, { products }) => {
    return products.find((p) => {
      return p.id === id;
    });
  },

  categories: (_parent, _args, { categories }) => {
    return categories;
  },

  category: (_parent, { id }, { categories }) => {
    return categories.find((c) => {
      return c.id === id;
    });
  },
};
