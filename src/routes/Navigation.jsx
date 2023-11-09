import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import WithNavbar from "./layout/WithNavbar";
import AddArticle from '../pages/AddArticle'

const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WithNavbar />}>
          <Route index element={<Products />} />
          <Route path="/:category" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/addArticle" element={<AddArticle />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Navigation;
