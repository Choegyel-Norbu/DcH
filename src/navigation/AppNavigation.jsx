import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavition from './DrawerNavigation';
import AuthNavigation from './AuthNavigation';
import {UserContext} from '../constant/UserContext';

const AppStack = createStackNavigator();

export default function AppNavigation() {
  const user = false;
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        {user ? (
          <AppStack.Screen name="App" component={DrawerNavition} />
        ) : (
          <AppStack.Screen name="Auth" component={AuthNavigation} />
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
