import React, { useContext} from 'react';
import { Toggler } from '../App';
import SingleCountryCard from '../Components/SingleCountryCard';
import ProductNotFoundPage from '../ErrorHandler/ProductNotFoundPage';


export default function Allcountries({click,inputValue,option,population,area,subregion}) {

    const {countries} = useContext(Toggler);
  
  
    const filtercountries = () => {
      let result = [...countries]; 
    
      if (option && option !== 'All') {
        result = result.filter((country) =>
          country.region.toLowerCase().includes(option.toLowerCase())
        );
      }
  
      
      if (inputValue) {
        result = result.filter((country) =>
          country.name.toLowerCase().includes(inputValue.toLowerCase())
        );
      }
      if(subregion){
        result = result.filter((country) =>
          country.name.toLowerCase().includes(subregion.toLowerCase())
        );
        
      }
  
      
      if (population) {
        result.sort((a, b) =>
          population === 'ascpop'
            ? a.population - b.population
            : b.population - a.population
        );
      }
  
    
      if (area) {
        result.sort((a, b) =>
          area === 'asc' ? a.area - b.area : b.area - a.area
        );
      }
  
      return result
    };
  
  
    const filteredCountries = filtercountries();
  
    return (
      <div className={`flex mt-10 flex-wrap gap-10 justify-center items-center px-[1rem] ${click?'dark-theme':'light-theme'}`}>
  {filteredCountries.length > 0 ? (
    filteredCountries.map((country, index) => (
      <SingleCountryCard key={index} country={country} click={click} />
    ))
  ) : (
    <ProductNotFoundPage />
  )}
</div>

    )
}


