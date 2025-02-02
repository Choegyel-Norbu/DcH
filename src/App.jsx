import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AboutUsScreen from './navigation/screens/AboutUsScreen';
import StatusBarRight from './components/StatusBarRight';
import TabApp from './navigations/tab/TabApp';

const stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="home"
        screenOptions={{headerShown: false}}>
        <stack.Screen
          name="home"
          component={TabApp}
          options={{
            title: 'Welcome to home',
            headerStyle: {
              backgroundColor: '#00e6e6',
            },
            headerTintColor: 'gray',
            headerTitleStyle: {fontWeight: 'condensed'},
            headerRight: () => (
              <>
                <StatusBarRight />
              </>
            ),
          }}
        />
        {/* <stack.Screen name="aboutUs" component={AboutUsScreen} /> */}
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
