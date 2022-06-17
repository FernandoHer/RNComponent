/* eslint-disable prettier/prettier *//* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */

import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../themes/appThemes';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const ChangeThemeScreen = () => {

    const { setDarkTheme } = useContext(ThemeContext);

  return (
    <View style={ styles.globalMargin}>
        <HeaderTitle title= "Theme"/>
        <TouchableOpacity
            onPress={ setDarkTheme }
            activeOpacity={0.8}
            style= {{
                width: 150,
                height: 50,
                borderRadius: 20,
                backgroundColor: '#5856D6',
                justifyContent: 'center',
            }}
        >
            <Text
                style={{
                    color: 'white',
                    textAlign:'center',
                    fontSize: 22,
                }}
            >
                Ligth / Dark
            </Text>

        </TouchableOpacity>
    </View>

  );
};
