import React, { useState } from 'react';
import { View, Text, StatusBar, Image, TextInput, TouchableHighlight, Alert, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RegisterStyles from './RegisterStyles';
import Colors from '../../../shared/colors/Colors';
import ButtonStyles from '../../../shared/styles/ButtonStyles';
import { and } from 'react-native-reanimated';

const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const validateEmail = ()=>{
        if(email === ""){
            Alert.alert("Debe llenar el campo de Email");
        }

    }

    const goToLogin = () => {
        navigation.navigate('Login');
    }

    

    const [fullName, setFullName]= useState("");
    const validateFullName = ()=>{
        if(fullName === ""){
            Alert.alert("Debe llenar el campo de Full Name");
        }
    }

    const [phoneNumbert, setPhoneNumbert]= useState("");
    const validatePhoneNumbert = ()=>{
        if(phoneNumbert === ""){
            Alert.alert("Debe llenar el campo de Phone Numbert");

        }
    }

    const goToUsers = () => {

        navigation.navigate('Users');
    }

    return <View style={RegisterStyles.container}>
        <StatusBar backgroundColor={Colors.primary}></StatusBar>
        <LinearGradient colors={[Colors.primary, Colors.secondary]} style={RegisterStyles.logoContainer}>
            <Image source={require('./img/account.png')} style={RegisterStyles.logo}></Image>
            <Text style={RegisterStyles.title}>Registro</Text>
        </LinearGradient>
        <View style={RegisterStyles.inputDataContainer}>

            <TextInput placeholder="Full Name" style={RegisterStyles.inputData} onChangeText={(text) => setFullName(text)}></TextInput>
            <Text>{fullName}</Text>
            
            <TextInput placeholder="Email" style={RegisterStyles.inputData} onChangeText={(text) => setEmail(text)}></TextInput>
            <Text>{email}</Text>

            <TextInput placeholder="Phone Numbert" style={RegisterStyles.inputData} keyboardType="numeric" onChangeText={(text) => setPhoneNumbert(text)}></TextInput>
            <Text>{phoneNumbert}</Text>

            <TextInput placeholder="Password" secureTextEntry={true} keyboardType="numeric" style={RegisterStyles.inputData}></TextInput>
            <TouchableOpacity onPress={()=>validatePhoneNumbert() & validateEmail() & validateFullName() === goToUsers()}  
            >
                <LinearGradient colors={[Colors.primary, Colors.secondary]} style={ButtonStyles.large}>
                    <Text style={RegisterStyles.textButton}>Register</Text>
                </LinearGradient>
            </TouchableOpacity>

            <Text title="Go To Login" onPress={()=>goToLogin()} >
            Go to Login
            </Text>
        </View>
    </View>
}
export default RegisterScreen;
