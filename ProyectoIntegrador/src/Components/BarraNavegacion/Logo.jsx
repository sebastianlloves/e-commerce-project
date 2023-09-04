import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="m-2 flex">
      <Link to="/">
        <span className="sr-only">Your Company</span>
        <img
          className="h-8 w-auto text-white"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt=""
        />
      </Link>
    </div>
  );
}

export default Logo;
