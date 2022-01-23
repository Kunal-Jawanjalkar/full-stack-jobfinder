import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {ThemeProvider} from 'react-native-elements';
import theme from './src/theme';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// components
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';
import CompanyRoutes from './src/pages/company';
import UserRoutes from './src/pages/user';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="company-routes" component={CompanyRoutes} />
            <Stack.Screen name="user-routes" component={UserRoutes} />
          </Stack.Navigator>
        </ThemeProvider>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
