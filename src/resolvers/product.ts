export const product =  {
    category: ({categoryId}, _, {categories}) => {
      return categories.find((c) => {
        return c.id === categoryId;
      });
    }
  }