import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Animated,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';

import React, {useContext, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import CustomInput from '../custom/CustomInput';
import CustomButton from '../custom/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import API_BASE_URL from '../config';
import {AuthContext} from '../custom/AuthContext';

export default function Login({navigation}) {
  const {logIn} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const logout = async () => {
    await AsyncStorage.removeItem('userToken');
  };

  const handleLogin = async () => {
    const loginData = {email, password};
    try {
      const response = await axios.post(`${API_BASE_URL}auth/login`, loginData);
      console.log('Login Request data: ', loginData);
      logIn(response.data);
    } catch (error) {
      if (error.response) {
        console.log('Server responded with an error:');
        console.log('Status:', error.response.status); // HTTP status code
        console.log('Headers:', error.response.headers); // Response headers
        console.log(
          'Error Data:',
          JSON.stringify(error.response.data, null, 2),
        ); // Response body
        Alert.alert(
          'Login Failed',
          `Error ${error.response.status}: ${
            error.response.data.message || 'Unknown error'
          }`,
        );
      } // If request was made but no response received
      else if (error.request) {
        console.log('No response received from server:', error.request);
        Alert.alert(
          'Login Failed',
          'No response from server. Please try again.',
        );
      } else {
        console.log('Error setting up request:', error.message);
        Alert.alert('Login Failed', 'An unexpected error occurred.');
      }
    }
  };

  return (
    <ImageBackground
      source={require('../images/donate.png')}
      style={styles.background}>
      <LinearGradient
        colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.8)']}
        style={styles.gradient}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <Text style={styles.title}>Welcome!</Text>
          <Text style={styles.subtitle}>Login to continue</Text>

          <CustomInput
            placeholder="Email"
            icon="email"
            value={email}
            onChangeText={setEmail}
          />
          <CustomInput
            placeholder="Password"
            icon="lock"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <CustomButton title="Login" onPress={handleLogin} />

          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.footerText}>
              Don't have an account?{' '}
              <Text style={styles.footerLink}>Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 30,
  },
  footerText: {
    color: '#fff',
    marginTop: 20,
  },
  footerLink: {
    color: '#3399ff',
    fontWeight: 'bold',
  },
});
