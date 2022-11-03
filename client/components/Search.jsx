
import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { searchCityAPI } from '../Apis/citiesApi'


function Search({ onSearchChange }) {

  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return searchCityAPI(inputValue)
  }

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  }
  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  )
}

export default Search