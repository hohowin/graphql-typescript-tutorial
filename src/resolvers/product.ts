export const product =  {

    category: ({categoryId}, _, {categories}) => {
      return categories.find((c) => {
        return c.id === categoryId;
      });
    },

    reviews: ({id}, _, {reviews}) => {
      return reviews.filter((r) => {
        return r.productId === id;
      });
    }
  }