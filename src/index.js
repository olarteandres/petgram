import React from "react";
import ReactDOM from "react-dom/client";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  concat,
} from "@apollo/client";
import Context from "./Context";
import { App } from "./App";

const httpLink = new HttpLink({
  uri: "https://catalogo-mascotas-server.vercel.app/graphql",
  onError: error => {
    const {networError} = error
    if(networError && networError.result.code === 'invalid_token') {
      sessionStorage.removeItem('token')
      localStorage.location.href = '/'
    }
  }
});


const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem("token");
  const authorization = token ? `Bearer ${token}` : "";
  operation.setContext({
    headers: {
      authorization,
    },
  });

  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

// React 18 new way to mount the app...
const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>
);
