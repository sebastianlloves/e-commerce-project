import React from "react";
import { data } from "./Data";
import { Link } from "react-router-dom";

const Maestro = () => {
  console.log(data);

  return (
    <div className='flex flex-col items-start'>
      {data.map((user) => (
        <Link to={user.id !== 4 && `/user/${user.id}`}>
          <div className='p-6 border m-4 w-80' key={user.id}>
            <h3>{user.name}</h3>
            <p>{`ID: ${user.id}`}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Maestro;
