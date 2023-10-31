import React from "react";
import { Link } from "react-router-dom";
import { FireIcon } from "@heroicons/react/20/solid";

function Logo() {
  return (
    <div className="m-2 flex">
      <Link to="/">
        <FireIcon className="w-10 text-sky-900" />
      </Link>
    </div>
  );
}

export default Logo;
