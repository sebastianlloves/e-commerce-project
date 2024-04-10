import { useParams } from "react-router-dom";
import { Spinner } from "../components/spinner/Spinner.jsx";
import { useProducts } from "../hooks/useProducts.js";
import { URL_API_PRODUCTS } from "../constants.js";
import ProductDetails from "../components/productDetails/ProductDetails.jsx";
import NoProducts from "../components/noProducts/NoProducts.jsx";

const ProductDetail = () => {
  const id = Number(useParams().id);
  const { products, loading, error } = useProducts(URL_API_PRODUCTS);
  const product = products?.find((p) => p.id === id);

  return (
    <>
      {loading && !error && <Spinner />}
      {!loading && error && <NoProducts onlyOneProduct={true} />}
      {product && !loading && !error && <ProductDetails product={product} />}
    </>
  );
};

export default ProductDetail;
