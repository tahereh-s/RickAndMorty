import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './graphql/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { CssBaseline } from '@mui/material';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
      <CssBaseline />
        <App />
      </ApolloProvider>
     </Provider>
  </React.StrictMode>
);

reportWebVitals();
