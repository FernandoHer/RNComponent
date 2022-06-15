/* eslint-disable prettier/prettier *//* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../themes/appThemes';

interface Props {
    title: string,
}

export const HeaderTitle = ({title}:Props) => {
    const { top } = useSafeAreaInsets();
  return (
    <View style={{
        marginTop:top + 15,
        marginBottom: 20,
    }}>
        <Text style={styles.title}>{title}</Text>
    </View>
  );
};
