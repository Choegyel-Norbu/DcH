import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PRscr from '../screen/DcHScrn/PRscr';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScr from '../screen/DcHScrn/HomeScr';
import PRdetails from '../screen/DcHScrn/PRdetails';
import HRlisingScr from '../screen/DcHScrn/HRlisingScr';
import Service from '../screen/DcHScrn/Service';
import ProfileScr from '../screen/DcHScrn/ProfileScr';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScr}
        options={{headerShown: false}}
      />
      <Stack.Screen name="PRdetails" component={PRdetails} />
      <Stack.Screen name="HRlisting" component={HRlisingScr} />
    </Stack.Navigator>
  );
};

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: '#3399ff'},
        tabBarActiveTintColor: '#3399ff',
        tabBarInactiveTintColor: '#888',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: () => <Icon name="home" size={28} color="#fff" />,
          tabBarLabelStyle: {color: '#fff'},
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScr}
        options={{
          tabBarIcon: () => <Icon name="person" size={28} color="#fff" />,
          tabBarLabelStyle: {color: '#fff'},
        }}
      />
    </Tab.Navigator>
  );
}
