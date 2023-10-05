import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetail from "../Components/Products/ProductDetail";
import CartList from "../pages/Cart";
import WithNavbar from "./layout/WithNavbar";

const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WithNavbar />}>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Route>
        <Route path="/cart" element={<CartList />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
