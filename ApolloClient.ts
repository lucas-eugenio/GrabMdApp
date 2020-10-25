import { ApolloClient as Client, InMemoryCache } from '@apollo/client';

const ApolloClient = new Client({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

export default ApolloClient;
