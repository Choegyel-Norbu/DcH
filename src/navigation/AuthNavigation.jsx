import {createStackNavigator} from '@react-navigation/stack';
import {Component} from 'react';
import Login from '../screen/Login';
import Signup from '../screen/Signup';

const AuthStack = createStackNavigator();

export default function AuthNavigation() {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Signup" component={Signup} />
    </AuthStack.Navigator>
  );
}
