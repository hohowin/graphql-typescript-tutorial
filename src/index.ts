import { ApolloServer } from "apollo-server";
import { category } from "./resolvers/category";
import { product } from "./resolvers/product";
import { query } from "./resolvers/query";
import { typeDefs } from "./schema";
import { db } from "./db";
import { mutation } from "./resolvers/mutation";

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: query,
    Mutation: mutation,
    Category: category,
    Product: product,
  },
  context: { db },
});

server.listen().then(({ url }) => {
  console.log(`Server is ready at ${url}`);
});
