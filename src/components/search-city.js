import { AsyncPaginate } from "react-select-async-paginate"
import { useState } from "react"
import { CITY_SEARCH_URL, cityApiGet } from './APIs'


const Search = ({ onSearch }) => {
  const [searchCity, setSearchCity] = useState(null)

  const loadOptions = (input) => {
    return fetch(`${CITY_SEARCH_URL}/cities?minPopulation=1000000&namePrefix=${input}`, cityApiGet)
      .then(response => response.json())
      .then((response) => {
        return {
          options: response.data.map((cities) => {
            return {
              label: `${cities.name}, ${cities.countryCode}`,
              value: `${cities.latitude} ${cities.longitude}`,

            }
          })
        }
      })
      .catch(err => console.error(err));
  }

  const onChangeHandler = (data) => {
    setSearchCity(data)
    onSearch(data);
  }

  return (
    <div className="searchBar">
      <AsyncPaginate
        placeholder="Search Your City"
        className="search"
        value={searchCity}
        debounceTimeout={550}
        loadOptions={loadOptions}
        onChange={onChangeHandler}
      />
    </div>
  )
}

export default Search