export const baseUrl = 'http://localhost:8000/api';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// api requests
export const companySignupApi = async (companyData: any) => {
  return await axios.post(`${baseUrl}/company-signup`, companyData);
};

export const apiRequest = async ({url, method, headers, body = null}) => {
  return await axios[method](url, body, {
    headers: headers,
  });
};

export const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('token');
    if (value !== null) {
      return value;
    }
  } catch (e) {
    // error reading value
    return e.message;
  }
};
