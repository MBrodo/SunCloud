import React, { useState, useEffect } from 'react';
import { SearchView } from './SearchView';
import { cities } from '../../consts/SearchConsts';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCityAction,
  removeCityAction,
} from '../../store/reducers/FavListReducer';

const SearchContainer = () => {
  const [filteredCities, setFilteredCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const favCities = useSelector(state => state.favList.favCitiesList);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const placeholder = 'Search';

  useEffect(() => {
    if (selectedCity != null) {
      navigation.navigate('Home', { selectedCity: selectedCity });
    }
  }, [selectedCity]);

  const handleFilter = searchCity => {
    const newFilter = cities.filter(value => {
      return value.fullName.toLowerCase().includes(searchCity.toLowerCase());
    });
    searchCity ? setFilteredCities(newFilter) : setFilteredCities([]);
  };

  const favCityActionPicker = item => {
    favCities.includes(item)
      ? dispatch(removeCityAction(item.city))
      : dispatch(addCityAction(item));
  };
  console.log(favCities);

  return (
    <SearchView
      placeholder={placeholder}
      handleFilter={handleFilter}
      filteredCities={filteredCities}
      selectedCity={selectedCity}
      setSelectedCity={setSelectedCity}
      favCityActionPicker={favCityActionPicker}
      favCities={favCities}
    />
  );
};

export default SearchContainer;
