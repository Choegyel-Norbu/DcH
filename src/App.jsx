import React from 'react';
import AppNavigation from './navigation/AppNavigation';
import OnboardingScreen from './screen/DcHScrn/OnboardingScreen';
import {AuthProvider} from './custom/AuthContext';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <AuthProvider>
      <AppNavigation />;{/* ensures the Toast component is always available. */}
      <Toast />
    </AuthProvider>
  );
};

export default App;
