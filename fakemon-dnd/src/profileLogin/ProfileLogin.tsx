import { useState } from 'react';
import { View } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const ProfileLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => alert('Logged in'))
      .catch(err => alert(err.message));
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20, gap: 12 }}>
      <Text variant="titleLarge">Login</Text>

      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <TextInput
        label="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />

      <Button mode="contained" onPress={login}>
        Login
      </Button>
    </View>
  );
}

export default ProfileLogin
