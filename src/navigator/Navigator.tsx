/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */


import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeSreen } from '../screens/HomeSreen';


const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
    }}
    >
      <Stack.Screen name="HomeScreen" component={HomeSreen} />
    </Stack.Navigator>
  );
};
