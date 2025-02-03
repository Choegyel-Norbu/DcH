import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import StatusBarRight from './components/StatusBarRight';
import TabApp from './navigations/tab/TabApp';
import HomeScr from './screen/DcHScrn/HomeScr';
import ImageCard from './cards/ImageCard';
import AppNavigation from './navigation/AppNavigation';
import {UserProvider} from './constant/UserContext';

const stack = createStackNavigator();

const App = () => {
  return (
    <UserProvider>
      <AppNavigation />
    </UserProvider>
  );
};

export default App;
