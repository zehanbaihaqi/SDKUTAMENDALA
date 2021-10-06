import {
    ApolloClient,
    InMemoryCache
  } from "@apollo/client";
  

const client = new ApolloClient({
  uri: "https://bismillahproject.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "CxDM2mRAGp2guB8zzXTkpVPy1qqxRScUVQPCVOY0N5bIY8svfqoGKDRv0GX31pbT",
  },
});
  
  export default client