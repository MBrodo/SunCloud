import React, { useState } from 'react';
import { SearchView } from './SearchView';
import { cities } from '../../consts/SearchConsts';

const SearchContainer = () => {
  const [filteredCities, setFilteredCities] = useState([]);
  const placeholder = 'Search';
  const handleFilter = searchCity => {
    const newFilter = cities.filter(value => {
      return value.fullName.toLowerCase().includes(searchCity.toLowerCase());
    });
    if (searchCity === '') {
      setFilteredCities([]);
    } else {
      setFilteredCities(newFilter);
    }
  };
  return (
    <SearchView
      placeholder={placeholder}
      handleFilter={handleFilter}
      filteredCities={filteredCities}
    />
  );
};

export default SearchContainer;
