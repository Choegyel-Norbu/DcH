import React, {createContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import API_BASE_URL from '../config';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const logIn = async token => {
    try {
      await AsyncStorage.setItem('userToken', token);
      setIsLoading(false);
      console.log('Token saved successfully @@@ ' + token);
    } catch (error) {
      console.log(error);
    }

    setUserToken('lkgjldjlkklggl');
    console.log('@@@@ ' + userToken);
  };

  const logOut = () => {
    setUserToken(null);
    console.log('Hit logout');
  };

  return (
    <AuthContext.Provider value={{logIn, logOut, isLoading, userToken}}>
      {children}
    </AuthContext.Provider>
  );
};
