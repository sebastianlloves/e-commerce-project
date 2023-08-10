import "./App.css";
/* import NavBar from "./Components/BarraNavegacion/NavBar"; */
import NavBarPropio from "./Components/BarraNavegacion/NavBarPropio.jsx";

export default function App() {
  return (
    <div className="bg-white relative h-screen">
      <NavBarPropio />
      {/* <NavBar /> */}
    </div>  
  );
}
