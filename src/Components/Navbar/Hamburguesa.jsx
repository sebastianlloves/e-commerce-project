import React from "react";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import "./Navbar.css";

function Hamburguesa() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <button
      type="button"
      className="hamburguesa rounded-mdp-2 h-6 w-6 text-gray-50 transition duration-500 ease-in lg:hidden"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? (
        <XMarkIcon className="absolute left-0 top-0 -rotate-90 transition duration-500 ease-in" />
      ) : (
        <Bars3Icon className="absolute left-0 top-0 rotate-180 transition duration-500 ease-in" />
      )}
    </button>
  );
}

export default Hamburguesa;
