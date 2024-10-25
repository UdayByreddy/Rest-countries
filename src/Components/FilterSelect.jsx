import React from "react";

export default function FilterSelect({ options, option, onChange, click, label }) {
  return (
    <>
      <select
        onChange={(e) => onChange(e.target.value)}
        className={`mt-4 p-3 w-full sm:w-auto border rounded-lg ${
          click
            ? "bg-black text-white border-gray-600"
            : "bg-white text-black border-gray-300"
        } lg:px-12 lg:ml-8`}
        value={option} 
      >
        <option value="">{label}</option> 
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
}
