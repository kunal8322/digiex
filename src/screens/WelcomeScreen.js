import React from 'react';
import { View, Text, Button } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View>
      <Text>Welcome!</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}
