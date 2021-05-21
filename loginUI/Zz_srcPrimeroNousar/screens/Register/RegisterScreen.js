import React from 'react';
import { View, Text, StatusBar, Image, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RegisterStyles from './RegisterStyles';
const RegisterScreen = () => {
    return <View style={RegisterStyles.container}>
        <StatusBar backgroundColor="#F3671C"></StatusBar>
        <LinearGradient colors={['#F3671C', '#F4801E']} style={RegisterStyles.logoContainer}>
            <Image source={require('./img/account.png')} style={RegisterStyles.logo}></Image>
            <Text style={RegisterStyles.title}>Registro</Text>
        </LinearGradient>
        <View style={RegisterStyles.inputDataContainer}>
            <TextInput placeholder="Full Name" style={RegisterStyles.inputData}></TextInput>
            <TextInput placeholder="Email" style={RegisterStyles.inputData}></TextInput>
            <TextInput placeholder="Phone Number" style={RegisterStyles.inputData}></TextInput>
            <TextInput placeholder="Password" style={RegisterStyles.inputData}></TextInput>

        </View>
    </View>
}

export default RegisterScreen;