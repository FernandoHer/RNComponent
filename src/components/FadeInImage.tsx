/* eslint-disable react-native/no-inline-styles *//* eslint-disable prettier/prettier */

import React, { useState } from 'react';
import { ActivityIndicator, Animated, View } from 'react-native';
import { useAnimated } from '../hooks/useAnimated';

interface Props {
    uri: string,
}

export const FadeInImage = ({uri}: Props) => {

    const { fadeIn, opacity } = useAnimated();
    const [isLoading, setIsLoading] = useState(true);
    const finishLoading = () =>  {
        fadeIn();
        setIsLoading(false);

    };

    return (
        <View style={{
            justifyContent:'center',
            alignItems:'center',
        }}>
            {
                isLoading && <ActivityIndicator style={{position: 'absolute'}} size={30} color="#5856D6"/>
            }
            <Animated.Image
                source={{uri}}
                onLoadEnd= {finishLoading }
                style = {{
                    width: '100%',
                    height: 400,
                    opacity,
                }}
            />

        </View>

    );
};
