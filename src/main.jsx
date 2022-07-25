import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
  gql,
} from "@apollo/client";

const getAuth = () => {
  const token = localStorage.getItem("phonenumbers-user-token");

  return token ? `bearer ${token}` : null;
};

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    headers: {
      authorization: getAuth(),
    },
    uri: "http://localhost:4000",
  }),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
