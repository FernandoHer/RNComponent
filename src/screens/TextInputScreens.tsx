/* eslint-disable prettier/prettier */
import React  from 'react';
import { TextInput, View, StyleSheet, KeyboardAvoidingView, Platform, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../themes/appThemes';
import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';

export const TextInputScreens = () => {


  const { form, onChange, isSubscribe } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribe: false,
  });


  return (
    <KeyboardAvoidingView
     behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>
        <View style={styles.globalMargin}>
            <HeaderTitle title="Text Input"/>
            <TextInput
                style = {stylesInput.inputStyles}
                placeholder = "Name"
                autoCorrect = { false }
                autoCapitalize = "words"
                onChangeText={(value) => onChange( value, 'name')}
            />
            <TextInput
                style= {stylesInput.inputStyles}
                placeholder = "email"
                autoCorrect = { false }
                autoCapitalize = "none"
                onChangeText={(value) => onChange( value, 'email')}
                keyboardType="email-address"
                keyboardAppearance="dark"
            />

            <TextInput
                style= {stylesInput.inputStyles}
                placeholder = "Phone"
                onChangeText={(value) => onChange( value, 'phone')}
                keyboardType="phone-pad"
            />

            <View style={stylesInput.switchRow}>
                <Text style={stylesInput.switchText}>Subscribe</Text>
                <CustomSwitch isOn = {isSubscribe} onChange= { (value) => onChange(value, 'isSubscribe') }/>
            </View>
            <HeaderTitle title={ JSON.stringify( form, null, 3)}/>
        </View>
      </ScrollView>

    </KeyboardAvoidingView>

  );
};

const stylesInput = StyleSheet.create({
    inputStyles:{
        borderWidth: 2,
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: 'rgba(0,0,0,0.4)',
        marginVertical: 8,
    },
    switchRow:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 8,
    },
    switchText:{
        fontSize: 25,
    },
});
