import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Toggler } from "../App";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SingleCountry() {
  const { id } = useParams();
  const [country, setCountry] = useState(null);
  const { countries } = useContext(Toggler);

  useEffect(() => {
    const getTheData = () => {
      if (countries.length > 0 && id) {
        let result = countries.find((count) => count.Id == id);

        if (result) {
          let selectedCountry = {
            name: result.name,
            flag: result.flag,
            nativeName: result.nativeName || "N/A",
            population: result.population,
            region: result.region,
            capital: result.capital,
            currencies: result.currencies,
            languages: result.languages,
            subregion: result.subregion || "N/A",
            continents: result.continents,
            tld: result.tld,
            borders: result.Borders,
          };

          setCountry(selectedCountry);
        }
      }
    };

    getTheData();
  }, [countries, id]);

  return (
    <>
      <div className="p-2">
        <Link to={"/"}>
          <button className="cursor-pointer p-2 bg-gray-100 text-black rounded-s flex items-center lg:p-4">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </Link>

        {country ? (
          <div className="flex flex-col w-full p-4 lg:flex-row justify-center items-center">
            <div className="flex justify-center items-center my-4 shadow-md">
              <img src={country.flag} alt={`${country.name}'s flag`} />
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center mx-4">
              <div className="">
                <div className="my-4 ml-3">
                  <h1 className="text-xl font-medium">{country.name}</h1>
                </div>
                <div className="flex flex-col lg:flex-row">
                  <div className="ml-3 my-2 text-sm mb-2">
                    <p>
                      <span className="font-medium">Native Name: </span>
                      {country.nativeName}
                    </p>
                    <p>
                      <span className="font-medium">Population: </span>
                      {country.population}
                    </p>
                    <p>
                      <span className="font-medium">Region: </span>
                      {country.region}
                    </p>
                    <p>
                      <span className="font-medium">Capital: </span>
                      {country.capital}
                    </p>
                    <p>
                      <span className="font-medium">Subregion: </span>
                      {country.subregion}
                    </p>
                  </div>
                  <div className="ml-3 my-2 text-sm mb-2">
                    <p>
                      <span className="font-medium">Top Level Domain: </span>
                      {country.tld}
                    </p>
                    <p>
                      <span className="font-medium">Currencies: </span>
                      {country.currencies}
                    </p>
                    <p>
                      <span className="font-medium">Languages: </span>
                      {country.languages}
                    </p>
                  </div>
                </div>
                <div className="ml-3 text-sm mb-2 lg:flex">
                  <h3 className="text-l font-medium mb-2">Border Countries:</h3>
                  {/* <span className='rounded-full'>{country.continents}</span> */}
                  {country.borders && country.borders.length > 0 ? (
  country.borders.map((borderGroup, groupIndex) =>
    <>
    <Link to={`/country/${borderGroup[1]}`}>
    <button
          key={`${groupIndex}`}
          className="p-3 m-2 cursor-pointer bg-white text-black font-normal rounded-sm shadow-md"
        >
          {borderGroup[0]}
        </button>
    </Link>
    </>
      )
    ) : (
      <span className="p-3 m-2 cursor-pointer bg-white text-black font-normal rounded-sm shadow-md">No border</span>
    
)}

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