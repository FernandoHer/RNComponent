/* eslint-disable prettier/prettier *//* eslint-disable react/self-closing-comp *//* eslint-disable react-native/no-inline-styles */


import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Animation101Screens = () => {
  return (
    <View style={{flex:1}}>
        <View style={styles.purpleBox}/>

    </View>
  );
};

const styles = StyleSheet.create({
    purpleBox:{
        backgroundColor: '#585606',
        width:150,
        height:150,
    },
});
