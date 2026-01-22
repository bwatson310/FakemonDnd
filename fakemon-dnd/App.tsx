import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import ProfileLogin from './src/profileLogin/profileLogin';

export default function App() {

  return (
    <PaperProvider>
      <ProfileLogin />
    </PaperProvider>
  );
}
