# Modern GraphQL Crash Course - 2022

Youtube: [Modern GraphQL Crash Course - 2022](https://youtu.be/qux4-yWeZvo)

## Try to query the

```bash
yarn watch
yarn start
```

Go to http://localhost:4000

In operation, try:

```
query {
  hello
  products {
    name
    price
  }
}
```

```
query {
  product(id:"53a0724c-a416-4cac-ae45-bfaedce1f147") {
    description

  }
}
```

```
query {
  categories { 
    id
    name
    products {
      name
      description
    }
  }
}
```

```
query {
  products(filter: {onSale: true}) {
    name
    price
    onSale
  }
}
```

```
query($filter: ProductsFilterInput, $productsFilter2: ProductsFilterInput) {
  categories {
    name
    products(filter: {onSale: true}) {
      name
      onSale
    }
  }
}
```

```
mutation {
  addCategory(input: {name: "Office"}) {
    id
    name
  }
}
```

```
mutation {
  addProduct(input: {
    name: "Fork",
    description: "Gold Plated Fork",
    image: "img-55",
    price: 555.55,
    onSale: true,
    quantity: 2,
    categoryId: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70"
  }){
    id
    name
    description
    image
    price
    onSale
    quantity
  }
}
```

```
mutation {
  addReview(input: {
    date: "2022-11-09",
    title: "Not Bad",
    comment: "It is a steal!",
    rating: 4,
    productId: "53a0724c-a416-4cac-ae45-bfaedce1f147",
  }) {
    id
    title
    comment
    rating
  }
}
```

```
mutation($deleteCategoryId: ID!) {
  deleteCategory(id: "34115aac-0ff5-4859-8f43-10e8db23602b")
}

query {
  products {
    id
    name
    category {
      name
    }
  }
}
```