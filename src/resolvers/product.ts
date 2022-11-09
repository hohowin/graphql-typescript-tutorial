import { categories } from "../db";

export const product =  {
    category: (parent, _args, _context) => {
      return categories.find((c) => {
        return c.id === parent.categoryId;
      });
    }
  }