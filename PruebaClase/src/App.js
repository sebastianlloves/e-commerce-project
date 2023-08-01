import './App.css';
import Saludo from './Components/Saludo'
import TarjetaProducto from './Components/TarjetaProducto'
import NavBar from './Components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <hr></hr>
      <Saludo nombre='Pepe'/>
      <TarjetaProducto precio={5000} nombre="Silla Gris" url_imagen="https://valenziana.com/wp-content/uploads/2021/07/salta-nat-urb-600x600.jpg"/>
      <TarjetaProducto precio={6500} nombre="Silla Blanca" url_imagen="https://valenziana.com/wp-content/uploads/2020/07/pampa-tiza-natural-1-copia-scaled.jpg"/>
    </div>
  );
}

export default App;
