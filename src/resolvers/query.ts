import { categories, products } from "../db";

export const query = {
    hello: () => {
      return ["Joy", "To", "The", "World!"];
    },
    products: () => {
      return products;
    },
    product: (_parent, args, _context) => {
      return products.find((p) => {
        return p.id === args.id;
      });
    },
    categories: () => {
      return categories;
    },
    category: (_parent, args, _context) => {
      return categories.find((c) => {
        return c.id === args.id;
      })
    },
  }