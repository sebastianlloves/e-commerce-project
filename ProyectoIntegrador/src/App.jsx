import "./App.css";
import NavBarPropio from "./Components/BarraNavegacion/NavBarPropio.jsx";
import { ProductsProvider } from "./Components/ProductsContext.jsx";
// import ListadoTarjetas from "./Components/ListadoTarjetas.jsx";
import ArticlesList from "./Components/Carrito/ArticlesList";

export default function App() {
  return (
    <ProductsProvider>
      <NavBarPropio />
      {/* <ListadoTarjetas /> */}
      <ArticlesList />
    </ProductsProvider>
  );
}
