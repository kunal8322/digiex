import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';

export default function ProfileScreen() {
  const dispatch = useDispatch();
  return (
    <View>
      <Text>Profile</Text>
      <Button title="Logout" onPress={() => dispatch(logout())} />
    </View>
  );
}
