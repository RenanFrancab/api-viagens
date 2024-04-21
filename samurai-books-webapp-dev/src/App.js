import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";

import api from "./services/api";

import "./styles/global.css";

import Routes from "./routes";

export default function App() {
  return (
    <ApolloProvider client={api}>
      <Routes />
    </ApolloProvider>
  );
}
