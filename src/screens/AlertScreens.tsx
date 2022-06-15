/* eslint-disable prettier/prettier */
import React from 'react';
import {  Alert, Button, View } from 'react-native';
import prompt from 'react-native-prompt-android';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../themes/appThemes';

export const AlertScreens = () => {
    const showAlert = () =>{
        Alert.alert(
            'Titulo',
            'Ud a presionado una alerta',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('"Cancel Pressed"'),
                style: 'cancel',
              },
              { text: 'Ok', onPress: () => console.log('"OK Pressed"') }
            ], {
                cancelable: true,
                onDismiss: () => console.log('onDismiss'),
            }
          );

    };

    const showPrompt = () => {
        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
             {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
             {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder',
            }
        );
    };
  return (
    <View style= {styles.globalMargin}>
        <HeaderTitle title= "AlertScreens"/>
        <Button
            title= "Mostrar Alerta"
            onPress = {showAlert}
        />
        <View style = {{marginVertical: 10}}/>
        <Button
            title= "Mostrar Prompt"
            onPress = {showPrompt}
        />
    </View>
  );
};
