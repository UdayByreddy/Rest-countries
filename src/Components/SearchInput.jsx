import React from "react";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SearchInput({click,onChange}) {
  return (
    <>
      <div className="relative w-full sm:w-80 mx-2 flex justify-center items-center lg:ml-4">
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search for Country"
          className={`pl-14 pr-4 py-3 w-full border rounded-lg focus:outline-none ${
            click
              ? "bg-black text-white border-gray-600"
              : "bg-white text-black border-gray-300"
          }`}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </>
  );
}
