import { AsyncPaginate } from 'react-select-async-paginate';
import { useState } from 'react';
import { CITY_SEARCH_URL, cityApiGet } from './APIs';

export const Search = ({ onSearch }) => {
  const [searchCity, setSearchCity] = useState(null);

  const loadOptions = async (input) => {
    try {
      const response = await fetch(
        `${CITY_SEARCH_URL}/cities?countryIds=US&namePrefix=${input}`,
        cityApiGet
      );
      const responseTwo = await response.json();
      return {
        options: responseTwo.data.map((cities) => {
          return {
            label: `${cities.name}, ${cities.countryCode}`,
            value: `${cities.latitude} ${cities.longitude}`
          };
        })
      };
    } catch (err) {
      return console.error(err);
    }
  };

  const onChangeHandler = (data) => {
    setSearchCity(data);
    onSearch(data);
  };
  console.log(searchCity);
  return (
    <div className="searchBar">
      <AsyncPaginate
        placeholder="Check Weather In Your City"
        className="search"
        value={searchCity}
        debounceTimeout={550}
        loadOptions={loadOptions}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default Search;
