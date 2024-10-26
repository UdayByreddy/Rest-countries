/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

export default function FilterSelect({ options, option, onChange, click, label }) {
  return (
    <>
      <select
        onChange={(e) => onChange(e.target.value)}
        className={`mt-4 p-3 w-full sm:w-auto border-none drop-shadow-2xl rounded-lg ${
          click
            ? "dark-theme-head"
            : "light-theme"
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
