import { categories, products } from "../db";

export const query = {
    hello: () => {
      return ["Joy", "To", "The", "World!"];
    },
    products: () => {
      return products;
    },
    product: (_parent, {id}, _context) => {
      return products.find((p) => {
        return p.id === id;
      });
    },
    categories: () => {
      return categories;
    },
    category: (_parent, {id}, _context) => {
      return categories.find((c) => {
        return c.id === id;
      })
    },
  }