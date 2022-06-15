/* eslint-disable prettier/prettier *//* eslint-disable react/self-closing-comp *//* eslint-disable react-native/no-inline-styles */


import React from 'react';
import { View, StyleSheet, Animated, Button} from 'react-native';
import { useAnimated } from '../hooks/useAnimated';

export const Animation103Screens = () => {

  const { opacity, position, fadeIn, fadeOut, startMovingPosition } = useAnimated();

  return (
    <View style={styles.container}>
        <Animated.View style={{
            ...styles.purpleBox,
            opacity,
            transform:[{
              translateY: position,
            }],
            }}/>

        <Button
          title="FadeIn"
          onPress= { () =>{
              fadeIn();
              startMovingPosition(1000, 2000);
            }
            }
        />
        <Button
          title="FadeOut"
          onPress= {fadeOut}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems:'center',
      justifyContent:'center',
    },
    purpleBox:{
        backgroundColor: 'red',
        width: 150,
        height: 150,
        marginBottom: 10,
    },
});
