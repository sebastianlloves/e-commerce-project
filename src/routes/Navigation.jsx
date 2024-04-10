import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import Cart from "../pages/Cart";
import WithNavbar from "./layout/WithNavbar";
// import AddArticle from '../pages/AddArticle'
import ScrollToTop from "./ScrollToTop";


const Navigation = () => {  
  

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<WithNavbar />}>
          <Route index element={<Home />} />
          <Route path="/:category" element={<Home className="vt" />} />
          <Route
            path="/product/:id"
            element={<ProductDetailsPage className="vt" />}
          />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/addArticle" element={<AddArticle />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default Navigation;
