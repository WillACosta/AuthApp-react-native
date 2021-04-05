import React from 'react';
import Dashboard from '../pages/Dashboard';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Typography, COLORS } from '../constants';

const { Navigator, Screen } = createBottomTabNavigator();

const DashboadRoutes: React.FC = () => (
  <Navigator
    tabBarOptions={{
      style: {
        height: 60,
        backgroundColor: COLORS.background,
        borderTopWidth: 0
      },
      tabStyle: {
        alignItems: 'center',
        justifyContent: 'center'
      },
      iconStyle: {
        flex: 0,
        width: 25,
        height: 25
      },
      labelStyle: {
        fontFamily: Typography.fontFamilyRegular,
        fontSize: 11,
        marginTop: 5
      },
      inactiveTintColor: COLORS.black,
      activeTintColor: COLORS.emerald
    }}
  >
    <Screen name="Painel" component={Dashboard}
      options={{
        tabBarIcon: ({ size, focused }) => {
          return (
            <MaterialCommunityIcons
              name="view-dashboard"
              size={size}
              color={focused ? COLORS.emerald : COLORS.black}
            />
          )
        }
      }}
    />
    <Screen name="Pagar" component={Dashboard}
      options={{
        tabBarIcon: ({ size, focused }) => {
          return (
            <MaterialCommunityIcons
              name="barcode-scan"
              size={size}
              color={focused ? COLORS.emerald : COLORS.black}
            />
          )
        }
      }}
    />
    <Screen name="Perfil" component={Dashboard}
      options={{
        tabBarIcon: ({ size, focused }) => {
          return (
            <FontAwesome
              name="user"
              size={size}
              color={focused ? COLORS.emerald : COLORS.black}
            />
          )
        }
      }}
    />
  </Navigator>
);

export default DashboadRoutes;