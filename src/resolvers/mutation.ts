import { v4 as uuid } from "uuid";

export const mutation = {
  addCategory: (_parent, { input }, { db }) => {
    const { categories } = db;
    const { name } = input;
    const newCategory = {
      id: uuid(),
      name: name,
    };

    categories.push(newCategory);
    return newCategory;
  },

  addProduct: (_parent, { input }, { db }) => {
    const { products } = db;
    const { name, description, image, price, onSale, quantity, categoryId } =
      input;
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
    const { reviews } = db;
    const { date, title, comment, rating, productId } = input;
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

  deleteCategory: (_parent, { id }, { db }) => {
    db.categories = db.categories.filter((c) => c.id !== id);
    db.products = db.products.map((p) => {
      if (p.categoryId === id)
        return {
          ...p,
          categoryId: null,
        };
      else 
        return p;
    });
    return true;
  },
};