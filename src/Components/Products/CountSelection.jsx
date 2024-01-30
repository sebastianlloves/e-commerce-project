import React from "react";

const CountSelection = ({stock = 1, countSelected, handleSelect }) => {
  const count = [];
  for (let index = 1; index <= stock; index++) {
    count.push(index)    
  }

  return (
    <div className="flex flex-col text-sm font-medium text-gray-900 ">
      <h3 className="my-4 text-base font-semibold text-gray-900">Cantidad:</h3>
      <select
        name="count"
        onChange={handleSelect}
        value={countSelected}
        className="m-3 w-16 block rounded-md border border-gray-300 bg-whit p-3 text-sm text-gray-900 shadow-azure-900 focus:border-azure-500 focus:shadow-md focus:outline-none focus:ring-azure-500"
      >
        {count.map((number) => (
          <option
            value={number}
            key={number}
          >
            {number}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountSelection;
