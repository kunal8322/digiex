import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardTabs from './DashboardTabs';

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={DashboardTabs} />
    </Drawer.Navigator>
  );
}
