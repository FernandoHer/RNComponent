/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, { useState } from 'react';
import { Image, ImageSourcePropType, SafeAreaView, TouchableOpacity, StyleSheet, Text, useWindowDimensions, View, Animated } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {LogBox} from 'react-native';
 
import  Icon  from 'react-native-vector-icons/Ionicons';
import { useAnimated } from '../hooks/useAnimated';
import { StackScreenProps } from '@react-navigation/stack';


LogBox.ignoreLogs([
    'ViewPropTypes will be removed',
]);


interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png'),
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png'),
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png'),
    },
];

interface Props extends StackScreenProps<any,any> {};

export const SlidesScreens = ({ navigation }:Props) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const { opacity, fadeIn } = useAnimated();
    const [isVisible, setIsVisible] = useState(false);
    const { width: screenWidth  } = useWindowDimensions();

    const rederItem = ( item: Slide ) =>{
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor:'white',
                    paddingTop:40,
                    borderRadius:5,
                    justifyContent:'center',
                    alignItems:'center',
                }}
            >
                <Image
                    source={ item.img }
                    style={{
                        width: 350,
                        height: 400,
                        resizeMode: 'center',
                    }}
                />
                <Text style={stylesSlides.title}>{item.title}</Text>
                <Text style={stylesSlides.description}>{item.desc}</Text>

            </View>
        );
    };
  return (
    <SafeAreaView
        style={{
            flex: 1,
            paddingTop: 50,
        }}
    >
        <Carousel
            //   ref={(c) => { this._carousel = c; }}
              data={items}
              renderItem={({item}) => rederItem(item)}
              sliderWidth={screenWidth}
              itemWidth={screenWidth}
              layout= "default"
              onSnapToItem={ (index) =>{
                setActiveIndex(index);
                if (index === (items.length - 1)) {
                    setIsVisible(true);
                    fadeIn();
                }}
                }
            />
        <View style={{ 
                    flexDirection: 'row',
                    justifyContent:'space-between',
                    alignItems: 'center',
                    marginHorizontal:20,
                    }}>
            <Pagination
            dotsLength={ items.length }
            activeDotIndex= { activeIndex }
            dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 10,
                backgroundColor: '#5856D6',

            }}
        />
            {
                isVisible &&
                (
                    <Animated.View
                        style={{
                            opacity,
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                flexDirection:'row',
                                backgroundColor: '#5856D6',
                                width: 150,
                                height: 50,
                                borderRadius: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            activeOpacity= {0.75}
                            onPress= {() => navigation.navigate('HomeScreen')}
                        >
                            <Text
                                style={{
                                    fontSize: 25,
                                    color: 'white',
                                }}
                            >
                                Entrar
                            </Text>
                            <Icon
                                name="arrow-forward-outline"
                                size={25}
                                color= "white"
                            />
                        </TouchableOpacity>
                    </Animated.View>
                )
            }

        </View>

    </SafeAreaView>
  );
};

const stylesSlides = StyleSheet.create({
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#5856D6',
    },
    description:{
        fontSize: 20,
        fontWeight: '500',
    },
});
