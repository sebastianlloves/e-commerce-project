import { Link } from "react-router-dom";

const ContinueShoppingButton = () => {
  return (
    <Link to="../">
      <button className="group relative mb-2 me-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-sky-900/60 to-indigo-800/60 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-[0.5px] focus:ring-indigo-500/70">
        <span className="relative rounded-md bg-white px-4 py-2 transition-all duration-200 ease-in group-hover:bg-opacity-0">
          Seguir Comprando
        </span>
      </button>
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="h-5 w-5"
        viewBox="0 0 24 24"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
      </svg>
    </Link>
  );
};

export default ContinueShoppingButton;
