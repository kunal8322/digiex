import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/authSlice';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  return (
    <View>
      <TextInput placeholder="Username" onChangeText={setUsername} />
      <Button title="Login" onPress={() => dispatch(login({ username }))} />
    </View>
  );
}
