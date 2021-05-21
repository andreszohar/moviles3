import React, { useState } from 'react';
import { View, Text, StatusBar, Image, TextInput, TouchableHighlight, Alert, TouchableOpacity,Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LoginStyles from './LoginStyles';
import Colors from '../../../shared/colors/Colors';
import ButtonStyles from '../../../shared/styles/ButtonStyles';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const validateEmail = ()=>{
        if(email === ""){
            Alert.alert("Debe llenar todos los campos");
        }
    }
    const goToRegister = () => {
        navigation.navigate('Register');
    }

   

    const sendUser = async ()=>{
        const response= await fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: 'Alberto',
              job: 'Style'
            })
          });
          const responseJson = await response.json();
          console.log(responseJson);
    }

    const getUser = async ()=>{
        const response= await fetch('https://reqres.in/api/users/2');
        const responseJson = await response.json();
        console.log(responseJson);
        navigation.navigate('Users');

    }

    return <View style={LoginStyles.container}>
        <StatusBar backgroundColor={Colors.primary}></StatusBar>
        <LinearGradient colors={[Colors.primary, Colors.secondary]} style={LoginStyles.logoContainer}>
            <Image source={require('./img/account.png')} style={LoginStyles.logo}></Image>
            <Text style={LoginStyles.title}>Login</Text>
        </LinearGradient>
        <View style={LoginStyles.inputDataContainer}>
            <TextInput placeholder="Email" style={LoginStyles.inputData} onChangeText={(text) => setEmail(text)}></TextInput>
            <Text>{email}</Text> 
            <TextInput placeholder="Password" secureTextEntry={true} keyboardType="numeric" style={LoginStyles.inputData}></TextInput>
            <TouchableOpacity onPress={()=>validateEmail() & sendUser() & getUser()}>
                <LinearGradient colors={[Colors.primary, Colors.secondary]} style={ButtonStyles.large}>
                    <Text style={LoginStyles.textButton}>la usable</Text>
                </LinearGradient>
            </TouchableOpacity>
            <Text title="Go To Login" onPress={()=>goToRegister()} >
            Go to Register
            </Text>
        </View>
    </View>
}
export default LoginScreen;
