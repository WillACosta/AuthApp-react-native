import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';

import AuthContext from '../contexts/auth';
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

import { NavigationProps } from '../models/navigation.models';

const Routes: React.FC<NavigationProps> = ({ navigation}) => {
  const { signed, loading, wrongCredentials } = useContext(AuthContext);

  if (loading) {

    loadder();

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#666" />
      </View>
    );
  }

  console.log('User Logged? ->', signed);

  if (wrongCredentials) {
    // navigation.navigate('/SignIn');
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}

async function loadder() {
  await new Promise(resolve => setTimeout(resolve, 5000));
}

export default Routes;
