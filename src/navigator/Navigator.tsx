/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */


import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeSreen } from '../screens/HomeSreen';
import { Animation101Screens } from '../screens/Animation101Screens';
import { Animation102Screens } from '../screens/Animation102Screens';
import { Animation103Screens } from '../screens/Animation103Screens';
import { SwitchScreens } from '../screens/SwitchScreens';
import { AlertScreens } from '../screens/AlertScreens';
import { TextInputScreens } from '../screens/TextInputScreens';
import { PullToRefreshScreens } from '../screens/PullToRefreshScreens';
import { CustomSectionListScreen } from '../screens/CustomSectionListScreen';
import { ModalScreens } from '../screens/ModalScreens';


const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
    }}
    >
      <Stack.Screen name="HomeScreen" component={HomeSreen} />
      <Stack.Screen name="Animation101Screens" component={Animation101Screens} />
      <Stack.Screen name="Animation102Screens" component={Animation102Screens} />
      <Stack.Screen name="Animation103Screens" component={Animation103Screens} />
      <Stack.Screen name="SwitchScreens" component={SwitchScreens} />
      <Stack.Screen name="AlertScreens" component={AlertScreens} />
      <Stack.Screen name="TextInputScreens" component={TextInputScreens} />
      <Stack.Screen name="PullToRefreshScreens" component={PullToRefreshScreens} />
      <Stack.Screen name="CustomSectionListScreen" component={CustomSectionListScreen} />
      <Stack.Screen name="ModalScreens" component={ModalScreens} />
    </Stack.Navigator>
  );
};
