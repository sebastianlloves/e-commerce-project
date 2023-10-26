import React from "react";

const CountSelection = ({ countSelected, handleSelect }) => {
  const count = [1, 2, 3, 4, 5, 6];

  return (
    <div className="flex w-14 flex-col text-sm font-medium text-gray-900 ">
      <h3 className="my-4 text-base font-semibold text-gray-900">Cantidad:</h3>
      <select
        name="count"
        onChange={handleSelect}
        value={countSelected}
        className="m-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-indigo-900 focus:border-indigo-500 focus:shadow-md focus:outline-none focus:ring-indigo-500"
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
