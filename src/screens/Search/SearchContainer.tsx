import React from 'react';
import { SearchView } from './SearchView';
import { cities } from '../../consts/SearchConsts';

const SearchContainer = () => {
  const placeholder = 'Search';
  return <SearchView placeholder={placeholder} cities={cities} />;
};

export default SearchContainer;
