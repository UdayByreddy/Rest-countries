import React from 'react';
import { Link } from 'react-router-dom';

export default function SingleCountryCard({ click, country, index }) {
  return (
    <Link key={country.Id} to={`/country/${country.Id}` }className={`block shadow-lg rounded-md card w-[20rem] cursor-pointer transform hover:scale-105 transition-transform duration-300 ${click?'dark-theme-head':'light-theme'}`}>
          <img
            src={country.flag}
            alt={`${country.name} flag`}
           className="h-[13rem] w-full rounded-t-md object-cover"
            loading="lazy"
          />
        <div className="p-5 flex flex-col gap-2">
          <h2 className="text-xl mb-2 font-bold truncate">{country.name}</h2>
          <span className={`block  ${click ? 'text-white' : 'text-black'}`}>
            Population: {country.population.toLocaleString()}
          </span>
          <span className={`block ${click ? 'text-white' : 'text-black'}`}>
            Region: {country.region}
          </span>
          {country.capital && (
            <span className={`block ${click ? 'text-white' : 'text-black'}`}>
              Capital: {country.capital}
            </span>
          )}
        </div>
    </Link>
  );
}
