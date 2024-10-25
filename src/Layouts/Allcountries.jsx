import React, { useContext} from 'react';
import { Toggler } from '../App';
import SingleCountryCard from '../Components/SingleCountryCard';
import ErrorPage from '../ErrorHandler/ErrorPage';


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
      <div
        className={`w-full grid grid-cols-1 place-items-center p-4 gap-6 md:grid-cols-2 lg:grid-cols-4 ${click ? 'bg-gray-900' : 'bg-white'}`}
      >
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country,index)=>(

            <SingleCountryCard country={country} index={index} click={click} />
          ))
        ) : (
          <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-3.png" className='w-full h-50'/>
        )}
      </div>
    )
}


