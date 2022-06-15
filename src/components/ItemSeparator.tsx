/* eslint-disable react-native/no-inline-styles *//* eslint-disable prettier/prettier */

import React from 'react';
import { View } from 'react-native';


export const itemSeparator = () =>{
    return (
        <View
            style={{
                borderBottomWidth: 1,
                opacity: 0.4,
                marginVertical: 8,
            }}
        />
    );
};
