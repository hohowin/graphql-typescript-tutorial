import { v4 as uuid } from "uuid";

export const mutation = {
  addCategory: (_parent, { input }, { db }) => {
    const { categories }: { categories: [any] } = db;
    const { name }: { name: string } = input;
    const newCategory = {
      id: uuid(),
      name: name,
    };

    categories.push(newCategory);
    return newCategory;
  },

  addProduct: (_parent, { input }, { db }) => {
    const { products }: { products: [any] } = db;
    const { name, description, image, price, onSale, quantity, categoryId }:  
      { name: string, description: string, image: string, price: number, onSale: boolean, quantity: number, categoryId: string } = input;
    const newProduct = {
      id: uuid(),
      name: name,
      description: description,
      image: image,
      price: price,
      onSale: onSale,
      quantity: quantity,
      categoryId: categoryId,
    };

    products.push(newProduct);
    return newProduct;
  },

  addReview: (_parent, { input }, { db }) => {
    const { reviews }: { reviews: [any] } = db;
    const { date, title, comment, rating, productId }: 
      { date: string, title: string, comment: string, rating: number, productId: string } = input;
    const newReview = {
      id: uuid(),
      date: date,
      title: title,
      comment: comment,
      rating: rating,
      productId: productId,
    };

    reviews.push(newReview);
    return newReview;
  },

  deleteCategory: (_parent, { id }, { db }): boolean => {
    db.categories = db.categories.filter((c) => c.id !== id);
    db.products = db.products.map((p) => {
      if (p.categoryId === id)
        return {
          ...p,
          categoryId: null,
        };
      else return p;
    });
    return true;
  },

  deleteProduct: (_parent, { id }, { db }): boolean => {
    db.products = db.products.filter((p) => p.id !== id);
    db.reviews = db.reviews.filter((r) => {
      return r.productId !== id;
    });
    return true;
  },

  deleteReview: (_parent, { id }, { db }): boolean => {
    db.reviews = db.reviews.filter((r) => r.id !== id);
    return true;
  },

  updateCategory: (_parent, { id, input }, { db }) => {
    const index: number = db.categories.findIndex((c) => c.id === id);
    if (index === -1) return null;

    db.categories[index] = {
      ...db.categories[index],
      ...input,
    };

    return db.categories[index];
  },

  updateProduct: (_parent, { id, input }, { db }) => {
    const index: number = db.products.findIndex((p) => p.id === id);
    if (index === -1) return null;

    db.products[index] = {
      ...db.products[index],
      ...input,
    };

    return db.products[index];
  },

  updateReview: (_parent, { id, input }, { db }) => {
    const index: number = db.reviews.findIndex((r) => r.id === id);
    if (index === -1) return null;

    db.reviews[index] = {
      ...db.reviews[index],
      ...input,
    };

    return db.reviews[index];
  },
};
