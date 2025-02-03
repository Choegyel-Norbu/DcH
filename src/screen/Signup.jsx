import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomInput from '../custom/CustomInput';
import CustomButton from '../custom/CustomButton';
import axios from 'axios';
import API_BASE_URL from '../config.jsx';
import {ScrollView} from 'react-native-gesture-handler';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
    };

    if (!firstName.trim()) {
      newErrors.firstName = 'First Name is required!';
      isValid = false;
    }

    if (!lastName.trim()) {
      newErrors.lastName = 'Second is required!';
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email format.';
      isValid = false;
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required.';
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
      isValid = false;
    }

    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = 'Confirm Password is required.';
      isValid = false;
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
      isValid = false;
    }

    if (!phone.trim()) {
      newErrors.phone = 'Phone Number is required.';
      isValid = false;
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = 'Invalid phone number (must be 10 digits).';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleUserRegister = async () => {
    if (!validateForm()) {
      return;
    }

    const userData = {firstName, lastName, email, phone, password};
    try {
      const response = await axios.post(`${API_BASE_URL}addUser`, userData);
    } catch (error) {
      Alert.alert('Error while registration!');
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
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>Sign up to get started</Text>

            {errors.firstName ? (
              <Text style={styles.errorText}>{errors.firstName}</Text>
            ) : null}
            <CustomInput
              placeholder="First Name"
              icon="person"
              value={firstName}
              onChangeText={setFirstName}
            />

            {errors.lastName ? (
              <Text style={styles.errorText}>{errors.lastName}</Text>
            ) : null}
            <CustomInput
              placeholder="Last Name"
              icon="person"
              value={lastName}
              onChangeText={setLastName}
            />

            {errors.password ? (
              <Text style={styles.errorText}>{errors.password}</Text>
            ) : null}
            <CustomInput
              placeholder="Password"
              icon="lock"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            {errors.confirmPassword ? (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            ) : null}
            <CustomInput
              placeholder="Confirm Password"
              icon="lock"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />

            {errors.email ? (
              <Text style={styles.errorText}>{errors.email}</Text>
            ) : null}
            <CustomInput
              placeholder="Email"
              icon="email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />

            {errors.phone ? (
              <Text style={styles.errorText}>{errors.phone}</Text>
            ) : null}
            <CustomInput
              placeholder="Phone number"
              icon="phone"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />

            <CustomButton title="Sign Up" onPress={handleUserRegister} />

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.footerText}>
                Already have an account?{' '}
                <Text style={styles.footerLink}>Login</Text>
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </LinearGradient>
    </ImageBackground>
  );
};

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
    width: '100%',
  },
  scrollContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
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
  errorText: {
    color: 'red',
    fontSize: 12,
    justifyContent: 'flex-start',
    textAlign: 'left',
  },
});

export default SignupScreen;
