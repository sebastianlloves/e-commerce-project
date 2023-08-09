import "./App.css";
import NavBar from "./Components/NavBar";
import NavBarPropio from "./Components/NavBarPropio.jsx";

export default function App() {
  return (
    <div className="bg-white relative h-screen">
      <NavBarPropio />
      <NavBar />
    </div>  
  );
}
