import React from "react";
import "./App.css";
import { store } from "./src/app/store";
import { Provider } from "react-redux";
import ArticlesInputs from "./src/pages/ArticlesInputs";

export default function App() {
  return (
    <Provider store={store}>
      <ArticlesInputs />
    </Provider>
  );
}
