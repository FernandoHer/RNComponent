/* eslint-disable prettier/prettier *//* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import { Button, Modal, StyleSheet, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../themes/appThemes';

export const ModalScreens = () => {
    const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles.globalMargin}>
        <HeaderTitle title="Modal Screen" />
        <Button
            title="Abrir modal"
            onPress={() => setIsVisible(true) }
        />
        <Modal
            animationType= "slide"
            visible= {isVisible}
            transparent= {true}
        >
            <View style={stylesModal.viewModal}>
                <View style={stylesModal.viewBody}>
                    <Text style={stylesModal.text1}>Modal</Text>
                    <Text style={stylesModal.text2}>Cuerpo del Modal</Text>
                    <Button
                        title="Cerrar"
                        onPress={() => setIsVisible(false)}
                    />
                </View>
            </View>

        </Modal>

    </View>
  );
};


const stylesModal = StyleSheet.create({
    viewModal:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    viewBody:{
        width:200,
        height:200,
        backgroundColor: 'white',
        justifyContent:'center',
        alignItems: 'center',
        shadowOffset:{
            width: 0,
            height: 10,
        },
        borderRadius: 8,
        shadowOpacity: 0.15,
        elevation: 20,
    },
    text1:{
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text2:{
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 20,
    },
});
