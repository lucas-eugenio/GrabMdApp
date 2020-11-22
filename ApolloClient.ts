import { ApolloClient as Client, InMemoryCache } from '@apollo/client';

const ApolloClient = new Client({
  uri: 'https://grabmd-server.herokuapp.com/graphql',
  // uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

export default ApolloClient;
