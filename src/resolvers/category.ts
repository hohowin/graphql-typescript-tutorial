export const category = {
    products: ({id}, _, {products}) => {
      return products.filter((p) => {
        return p.categoryId === id;
      });
    }
  };