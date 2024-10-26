import React from "react";
import { Link } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SingleCountry({ country,click }) {
  return (
    <>
      <div className={`p-2 ${click?'dark-theme':'light-theme'}`}>
        <Link to={"/"}>
          <button className={`cursor-pointer px-4 py-2 rounded-s flex items-center shadow-xl lg:px-8 lg:py-4 lg:ml-12 lg:mt-4 ${click?'dark-theme-head':'light-theme'}`}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </Link>

        {country ? (
          <div className="flex flex-col w-full p-4 lg:flex-row lg:justify-start justify-center items-center">
            <div className="flex justify-center items-center my-4 lg:w-[50%]">
              <img src={country.flag} alt={`${country.name}'s flag`} className="w-[80%] h-[60%]" />
            </div>
            <div className="flex flex-col lg:flex-row lg:text-2xljustify-center items-center mx-4">
              <div>
                <div className="my-4 ml-3">
                  <h1 className="text-2xl font-bold">{country.name}</h1>
                </div>
                <div className="flex flex-col lg:flex-row">
                  <div className="ml-3 my-2 mb-2  text-sm lg:text-lg">
                    <p>
                      <span className="font-bold">Native Name: </span>
                      {country.nativeName}
                    </p>
                    <p>
                      <span className="font-bold">Population: </span>
                      {country.population}
                    </p>
                    <p>
                      <span className="font-bold">Region: </span>
                      {country.region}
                    </p>
                    <p>
                      <span className="font-bold">Capital: </span>
                      {country.capital}
                    </p>
                    <p>
                      <span className="font-bold">Subregion: </span>
                      {country.subregion}
                    </p>
                  </div>
                  <div className="ml-3 my-2 text-sm mb-2 lg:text-lg">
                    <p>
                      <span className="font-bold">Top Level Domain: </span>
                      {country.tld}
                    </p>
                    <p>
                      <span className="font-bold">Currencies: </span>
                      {country.currencies}
                    </p>
                    <p>
                      <span className="font-bold">Languages: </span>
                      {country.languages}
                    </p>
                  </div>
                </div>
                <div className="ml-3 text-sm mb-2 lg:w-full lg:text-lg">
                  <h3 className="text-l font-bold mb-2">Border Countries:</h3>
                  <div className="flex flex-wrap overflow-x-auto max-w-lg space-x-2">
                    {country.borders && country.borders.length > 0 ? (
                      country.borders.map((border, index) => (
                        <Link key={index} to={`/country/${border[1]}`}>
                          <button className={`p-3 m-2 font-normal rounded-sm shadow-md ${click?'dark-theme-head':'light-theme'}`}>
                            {border[0]}
                          </button>
                        </Link>
                      ))
                    ) : (
                      <button className={`p-3 m-2 font-normal rounded-sm shadow-md ${click?'dark-theme-head':'light-theme'}`}>
                        No border
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading country data...</p>
        )}
      </div>
    </>
  );
}
