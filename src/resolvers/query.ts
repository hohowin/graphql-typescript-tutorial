export const query = {
    hello: () => {
      return ["Joy", "To", "The", "World!"];
    },
    products: (_parents, _args, {products}) => {
      return products;
    },
    product: (_parent, {id}, {products}) => {
      return products.find((p) => {
        return p.id === id;
      });
    },
    categories: (_parent, _args, {categories}) => {
      return categories;
    },
    category: (_parent, {id}, {categories}) => {
      return categories.find((c) => {
        return c.id === id;
      })
    },
  }