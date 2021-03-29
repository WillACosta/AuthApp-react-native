import React from 'react';
import Dashboard from '../pages/Dashboard';

import { createStackNavigator } from '@react-navigation/stack';

const DashboadStack = createStackNavigator();

const DashboadRoutes: React.FC = () => (
  <DashboadStack.Navigator screenOptions={{ headerShown: false }}>
    <DashboadStack.Screen name="Dashboard" component={Dashboard} />
  </DashboadStack.Navigator>
);

export default DashboadRoutes;