import React from 'react'
import { Link } from 'react-router-dom'
export default function SingleCountryCard({click,country,index}) {
  return (
    <>
        <Link key={country.Id} to={`/country/${country.Id}`}>
          <div
            key={index}
            className={`flex flex-col items-start pb-4 border border-gray-300 rounded-lg shadow-lg w-full`}
          >
            <img
              src={country.flag}
              alt={`${country.name} flag`}
              className="w-full rounded-t-md object-cover"
              loading="lazy"
            />
            <div className="text-start pl-3">
              <h2 className="font-bold text-lg">{country.name}</h2>
              <span
                className={`block ${click ? 'text-white-700' : 'text-black-700'}`}
              >
                Population: {country.population.toLocaleString()}
              </span>
              <span
                className={`block ${click ? 'text-white-700' : 'text-black-700'}`}
              >
                Region: {country.region}
              </span>
              {country.capital && (
                <span
                  className={`block ${click ? 'text-white-700' : 'text-black-700'}`}
                >
                  Capital: {country.capital}
                </span>
              )}
            </div>
          </div>
        </Link>
    </>
  )
}
