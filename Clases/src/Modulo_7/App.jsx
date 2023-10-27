import React from "react";
import "./App.css";
import { store } from "./src/app/store";
import { Provider } from "react-redux";
import Home from "./src/pages/Home";

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
