import React,{useState,useContext,useEffect}from 'react'
import { useParams } from 'react-router-dom';
import { Toggler } from '../App';
import SingleCountry from '../Components/SingleCountry';

export default function Country() {
    const { id } = useParams();
  const [country, setCountry] = useState(null);
  const { countries,click } = useContext(Toggler);

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
    <SingleCountry country={country} click={click}/>
    
    </>
  )
}
