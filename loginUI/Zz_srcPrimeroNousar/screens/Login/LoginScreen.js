import React from 'react';
import { View, Text, StatusBar, Image, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LoginStyles from './LoginStyles';
const LoginScreen = () => {
    return <View style={LoginStyles.container}>
        <StatusBar backgroundColor="#F3671C"></StatusBar>
        <LinearGradient colors={['#F3671C', '#F4801E']} style={LoginStyles.logoContainer}>
            <Image source={require('./img/account.png')} style={LoginStyles.logo}></Image>
            <Text style={LoginStyles.title}>Login</Text>
        </LinearGradient>
        <View style={LoginStyles.inputDataContainer}>
            <TextInput placeholder="Email" style={LoginStyles.inputData}></TextInput>
            <TextInput placeholder="Password" style={LoginStyles.inputData}></TextInput>
        </View>
    </View>
}

export default LoginScreen;
