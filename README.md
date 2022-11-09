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