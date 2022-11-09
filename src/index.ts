import { ApolloServer } from "apollo-server";
import { category } from "./resolvers/category";
import { product } from "./resolvers/product";
import { query } from "./resolvers/query";
import { typeDefs } from "./schema";
  
  const server = new ApolloServer({
    typeDefs,
    resolvers: {Query: query, Category: category, Product: product},
  });
  
  server.listen().then(({ url }) => {
    console.log(`Server is ready at ${url}`);
  });