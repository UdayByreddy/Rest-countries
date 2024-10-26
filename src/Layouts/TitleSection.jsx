import React, {useContext, useState } from 'react';
import { Toggler } from '../App';
import Allcountries from './Allcountries';
import SearchInput from '../Components/SearchInput';
import FilterSelect from '../Components/FilterSelect';


const TitleSection = ({ click }) => {
    const [inputValue, setInputValue] = useState('');
    const [option, setOption] = useState('');
    const [population, setPopulation] = useState('');
    const [area, setArea] = useState('');
    const [subregion, setSubRegion] = useState('');
    const { countries } = useContext(Toggler);

    const regionOptions = [
        { label: 'All Regions', value: '' },
        { label: 'Africa', value: 'Africa' },
        { label: 'Americas', value: 'Americas' },
        { label: 'Asia', value: 'Asia' },
        { label: 'Europe', value: 'Europe' },
        { label: 'Oceania', value: 'Oceania' },
    ];

    const populationOptions = [
        { label: 'Population Ascending', value: 'ascpop' },
        { label: 'Population Descending', value: 'descpop' },
    ];

    const areaOptions = [
        { label: 'Smaller Area', value: 'asc' },
        { label: 'Larger Area', value: 'desc' },
    ];
    
    const subRegionList = () => {
        return countries
            .filter((country) => country.region === option) 
            .map((country) => ({ label: country.name, value: country.name })); // Return objects for FilterSelect
    };

    return (
        <>
        <div>
             <div className={`mt-4 flex flex-wrap justify-between mx-2 lg:mx-0 ${click ? 'dark-theme' : 'light-theme'}`}>
                <SearchInput click={click} onChange={setInputValue} />

                <FilterSelect options={regionOptions} option={option} onChange={setOption} click={click} label="Filter By Region" />
               {option && <FilterSelect 
                    options={subRegionList()}
                    option={subregion} 
                    onChange={setSubRegion} 
                    label="Filter by Subregion" 
                    click={click} 
                />} 
            </div>

            <div className={`mt-4 flex flex-wrap justify-between mx-2 lg:mx-0 ${click ? 'dark-theme' : 'light-theme'}`}>
                <FilterSelect options={populationOptions} option={population} onChange={setPopulation} click={click} label="Filter by Population" />

                <FilterSelect options={areaOptions} option={area} onChange={setArea} click={click} label="Filter by Area" />
            </div>
        </div>
           

                <Allcountries click={click} inputValue={inputValue} option={option} population={population} area={area} subregion={subregion} />
        </>
    );
};

export default TitleSection;
