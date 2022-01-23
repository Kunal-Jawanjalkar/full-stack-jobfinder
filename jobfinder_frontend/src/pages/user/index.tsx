import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import UserDashboard from './dashboard';
import SearchJob from './searchjob';
const Tab = createBottomTabNavigator();
import Icon from 'react-native-vector-icons/Ionicons';
import UserProfile from './profile';

const UserRoutes: React.FC = () => {
  return (
    <>
      {/* <Icon name="md-briefcase-sharp" size={30} color={'black'} /> */}
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="dashboard" component={UserDashboard} />
        <Tab.Screen name="search-job" component={SearchJob} />
        <Tab.Screen name="profile" component={UserProfile} />
      </Tab.Navigator>
    </>
  );
};

export default UserRoutes;
