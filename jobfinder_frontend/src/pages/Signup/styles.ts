import React from 'react';
import {StyleSheet} from 'react-native';
import {Platform} from 'react-native';

const signupStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Platform.OS === 'web' ? 500 : 10,
    display: 'flex',
    paddingVertical: 10,
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

export default signupStyles;
