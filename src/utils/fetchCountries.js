
import axios from 'axios';

export const fetchCountries = async () => {
  try {
    const response = await axios.get(import.meta.env.VITE_API_URL);

    const codeNames = response.data.reduce((acc, country, index) => {
      const name = country.name.common;
      const cca3 = country.cca3;
      acc[cca3] = { name, index };
      return acc;
    }, {});

    const bordersMap = response.data.reduce((acc, country) => {
      if (country.borders && Array.isArray(country.borders)) {
        acc[country.cca3] = country.borders
          .map((border) => (codeNames[border] ? [codeNames[border].name, codeNames[border].index] : null))
          .filter(Boolean);
      } else {
        acc[country.cca3] = [];
      }
      return acc;
    }, {});

    const countriesData = response.data.map((country, index) => ({
      Id: index,
      name: country.name.common,
      flag: country.flags.png,
      nativeName: country.name.nativeName
        ? Object.values(country.name.nativeName)[0].common
        : 'N/A',
      population: country.population,
      region: country.region,
      capital: country.capital ? country.capital[0] : 'N/A',
      currencies: country.currencies
        ? Object.values(country.currencies)[0].name
        : 'N/A',
      languages: country.languages
        ? Object.values(country.languages).join(', ')
        : 'N/A',
      subregion: country.subregion || 'N/A',
      continents: country.continents ? country.continents.join(', ') : 'N/A',
      tld: country.tld ? country.tld[0] : 'N/A',
      area: country.area,
      Borders: bordersMap[country.cca3] || [],
      cca3: country.cca3,
    }));

    return countriesData;
  } catch (error) {
    console.error('Error fetching countries data:', error);
    throw error;
  }
};
