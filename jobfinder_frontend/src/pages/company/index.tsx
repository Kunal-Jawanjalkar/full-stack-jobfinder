import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CompanyDashboard from './dashboard';
import CreateJob from './createjob';
import CompanyProfile from './profile';
const Tab = createBottomTabNavigator();
import Icon from 'react-native-vector-icons/Ionicons';

const CompanyRoutes: React.FC = () => {
  return (
    <>
      {/* <Icon name="md-briefcase-sharp" size={30} color={'black'} /> */}
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="dashboard" component={CompanyDashboard} />
        <Tab.Screen name="createjob" component={CreateJob} />
        <Tab.Screen name="profile" component={CompanyProfile} />
      </Tab.Navigator>
    </>
  );
};

export default CompanyRoutes;
