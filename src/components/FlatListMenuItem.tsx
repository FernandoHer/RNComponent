/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/AppInterfaces';

interface Props {
  menuItem: MenuItem,
}


export const FlatListMenuItem = ({menuItem}:Props) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress = {() => navigation.navigate( menuItem.component as any )}
    >
      <View style={styles.container}>
        <Icon
          name= {menuItem.icon}
          size= {23}
          color= "blue"
        />
        <Text style={styles.itemText}>{menuItem.name}</Text>

        <Icon
          name= "chevron-forward-outline"
          size= {23}
          color= "blue"
        />
      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
  },
  itemText: {
    flex: 1,
    marginLeft: 8,
    fontSize: 19,
    fontWeight: 'bold',
  },

});
