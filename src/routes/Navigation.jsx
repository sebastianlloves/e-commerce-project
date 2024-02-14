import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import WithNavbar from "./layout/WithNavbar";
import AddArticle from '../pages/AddArticle'
import ScrollToTop from "./ScrollToTop";
/* 
import { flushSync } from "react-dom";
import { useNavigate } from "react-router-dom";

const ViewBack = ()=>{
  const navigate = useNavigate();
  flushSync(() => {
    window.addEventListener("popstate", ({ target }) => {
      if (document.startViewTransition) {
        document.startViewTransition(() => navigate(target.location.pathname));
      } else {
        navigate(target.location.pathname);
      }
    });
  });

  return null
} */


const Navigation = () => {  
  

  return (
    <Router>
      {/* <ViewBack /> */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<WithNavbar />}>
          <Route index element={<Products />} />
          <Route path="/:category" element={<Products className="vt" />} />
          <Route
            path="/product/:id"
            element={<ProductDetail className="vt" />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/addArticle" element={<AddArticle />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Navigation;
