import React, { useState, useEffect } from 'react';
import { SearchView } from './SearchView';
import { cities } from '../../consts/SearchConsts';
import { useNavigation } from '@react-navigation/native';

const SearchContainer = () => {
  const [filteredCities, setFilteredCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const navigation = useNavigation();
  const placeholder = 'Search';

  useEffect(() => {
    if (selectedCity != null) {
      navigation.navigate('Home', { selectedCity: selectedCity });
    }
  });

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
      selectedCity={selectedCity}
      setSelectedCity={setSelectedCity}
    />
  );
};

export default SearchContainer;
