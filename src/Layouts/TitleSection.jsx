import React, {useContext, useReducer, useState } from 'react';
import { Toggler } from '../App';
import Allcountries from './Allcountries';
import SearchInput from '../Components/SearchInput';
import FilterSelect from '../Components/FilterSelect';


const TitleSection = ({ click }) => {
    const initialState = {
        inputValue: '',
        region: '',
        population: '',
        area: '',
        subregion: ''
    };
    function reducer(state, action) {
        switch (action.type) {
            case "input":
                return { ...state, inputValue: action.payload };
            case "region":
                return { ...state, region: action.payload };
            case "population":
                return { ...state, population: action.payload };
            case "area":
                return { ...state, area: action.payload };
            case "subregion":
                return { ...state, subregion: action.payload };
            default:
                throw new Error("Unknown action type");
        }
    }

    const [state,dispatch] = useReducer(reducer,initialState);
    // const [inputValue, setInputValue] = useState('');
    // const [option, setOption] = useState('');
    // const [population, setPopulation] = useState('');
    // const [area, setArea] = useState('');
    // const [subregion, setSubRegion] = useState('');
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
            .filter((country) => country.region === state.region) 
            .map((country) => ({ label: country.name, value: country.name })); 
    };

    return (
        <>
        <div>
             <div className={`mt-4 flex flex-wrap justify-between mx-2 lg:mx-0 ${click ? 'dark-theme' : 'light-theme'}`}>
                <SearchInput click={click} onChange={(e)=>dispatch({type:"input", payload:e.target.value})} />

                <FilterSelect options={regionOptions} option={state.region} onChange={(e)=>dispatch({type:"region",payload:e.target.value})} click={click} label="Filter By Region" />
               {state.region && <FilterSelect 
                    options={subRegionList()}
                    option={state.subregion} 
                    onChange={(e)=>dispatch({type:'subregion',payload:e.target.value})} 
                    label="Filter by Subregion" 
                    click={click} 
                />} 
            </div>

            <div className={`mt-4 flex flex-wrap justify-between mx-2 lg:mx-0 ${click ? 'dark-theme' : 'light-theme'}`}>
                <FilterSelect options={populationOptions} option={state.population} onChange={(e)=>dispatch({type:'population',payload:e.target.value})} click={click} label="Filter by Population" />

                <FilterSelect options={areaOptions} option={state.area} onChange={(e)=>dispatch({type:'area',payload:e.target.value})} click={click} label="Filter by Area" />
            </div>
        </div>
           

                <Allcountries click={click} inputValue={state.inputValue} option={state.region} population={state.population} area={state.area} subregion={state.subregion} />
        </>
    );
};

export default TitleSection;
