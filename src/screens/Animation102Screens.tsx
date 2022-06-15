/* eslint-disable prettier/prettier *//* eslint-disable react/self-closing-comp *//* eslint-disable react-native/no-inline-styles */


import React, { useRef } from 'react';
import { View, StyleSheet, PanResponder, Animated } from 'react-native';

export const Animation102Screens = () => {

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x, // x,y are Animated.Value
        dy: pan.y,
      },
    ],
      {useNativeDriver: false}
    ),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
        } // Back to zero
      ).start();
    },
  });

  return (
    <View style={styles.container}>
        <Animated.View
            {...panResponder.panHandlers}
          style={{
            ...styles.purpleBox,
            transform:[{
              translateX: pan.getLayout().left,
            },{
              translateY: pan.getLayout().top,
            }],
          }}
      />

    </View>
  );
};

const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    purpleBox:{
        backgroundColor: 'blue',
        width:150,
        height:150,
        borderRadius:10,
    },
});
