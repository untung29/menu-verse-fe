import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://menu-verse-972a3df7b23f.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
