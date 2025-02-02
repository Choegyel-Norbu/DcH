import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import StatusBarRight from './components/StatusBarRight';
import TabApp from './navigations/tab/TabApp';
import HomeScr from './DcHScrn/HomeScr';
import ImageCard from './cards/ImageCard';

const stack = createStackNavigator();

const App = () => {
  return (
    <HomeScr />
    // <ImageCard />

    // <NavigationContainer>
    //   <TabApp />
    // </NavigationContainer>
  );
};

export default App;
