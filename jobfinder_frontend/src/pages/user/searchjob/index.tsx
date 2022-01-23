import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {SearchBar} from 'react-native-elements';
const SearchJob = () => {
  const [search, setSearch] = useState('');
  return (
    <View>
      <SearchBar
        placeholder="Search jobs by category and location..."
        value={search}
        onChangeText={search => setSearch(search)}
      />
    </View>
  );
};

export default SearchJob;
