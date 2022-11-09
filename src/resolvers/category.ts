import { products } from "../db";

export const category = {
    products: (parent, _args, _context) => {
      return products.filter((p) => {
        return p.categoryId === parent.id;
      });
    }
  };