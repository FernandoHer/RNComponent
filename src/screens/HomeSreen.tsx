/* eslint-disable prettier/prettier *//* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { MenuItem } from '../interfaces/AppInterfaces';
import { styles } from '../themes/appThemes';



const menuItems: MenuItem[] = [
    {
        name: 'Animation 101',
        icon: 'cube-outline',
        components: 'Animation101Screen',
    },
    {
        name: 'Animation 102',
        icon: 'albums-outline',
        components: 'Animation102Screen',
    },
    {
        name: 'Animation 103',
        icon: 'airplane-outline',
        components: 'Animation103Screen',
    },
];

export const HomeSreen = () => {
    const { top } = useSafeAreaInsets();

    const renderListMenu = () =>{

        return (
            <View style={{
                marginTop:top + 15,
                marginBottom: 20,
            }}>
                <Text style={styles.title}>Opciones de menú</Text>
            </View>
        );
    };

    const itemSeparator = () =>{
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

  return (
    <View style={{flex:1, ...styles.globalMargin}}>
        <FlatList
            data= { menuItems }
            renderItem= { ({item}) => <FlatListMenuItem menuItem={item}/> }
            keyExtractor= { (item) => item.name}
            ListHeaderComponent= {() => renderListMenu()}
            ItemSeparatorComponent= { () => itemSeparator()}
        />
    </View>
  );
};
