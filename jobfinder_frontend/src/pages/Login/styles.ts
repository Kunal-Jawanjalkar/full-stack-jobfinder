import React from 'react';
import {StyleSheet} from 'react-native';
import {Platform} from 'react-native';

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Platform.OS === 'web' ? 500 : 10,
    display: 'flex',
    paddingVertical: 100,
  },
  heading: {
    marginBottom: 15,
  },
  button: {
    color: 'blue',
  },
  picker: {
    padding: 5,
  },
  pickerItem: {
    padding: 5,
  },
});

export default loginStyles;
