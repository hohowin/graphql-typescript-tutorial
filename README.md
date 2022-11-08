# Modern GraphQL Crash Course - 2022

Youtube: [Modern GraphQL Crash Course - 2022](https://youtu.be/qux4-yWeZvo)

## Try to query the

```bash
node index.js
```

Go to http://localhost:4000

In operation, try:

```json
query {
  hello
  products {
    name
    price
  }
}
```

```json
query {
  product(id:"53a0724c-a416-4cac-ae45-bfaedce1f147") {
    description

  }
}
```