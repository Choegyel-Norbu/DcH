import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Animated,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import React, {useContext, useState} from 'react';
import {useEffect, useRef} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import CustomInput from '../custom/CustomInput';
import CustomButton from '../custom/CustomButton';
import {UserContext} from '../constant/UserContext';

export default function Login({navigation}) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const {setUser} = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 900,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleLogin = () => {
    setUser(true);
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
