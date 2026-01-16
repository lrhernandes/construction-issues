import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: "https://issues-fake-backend.vercel.app/graphql",
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: "https://issues-fake-backend.vercel.app/graphql",
      headers: {
        "x-api-key": process.env.API_KEY,
      },
    }),
  });
};

export default createApolloClient;
