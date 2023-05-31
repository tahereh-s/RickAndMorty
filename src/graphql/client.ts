import { ApolloClient, HttpLink } from '@apollo/client/core';
import { InMemoryCache } from '@apollo/client/cache';
// import fetch from 'cross-fetch';

const apolloClient = new ApolloClient({
    link: new HttpLink({ uri: 'https://rickandmortyapi.com/graphql' }),
    cache: new InMemoryCache(),
});

export default apolloClient