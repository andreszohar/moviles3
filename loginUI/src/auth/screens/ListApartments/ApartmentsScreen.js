import React, { useState } from 'react';
import { View, Text, Button} from 'react-native';
import Colors from '../../../shared/colors/Colors';
import ButtonStyles from '../../../shared/styles/ButtonStyles';

const ApartmentsScreen = ({navigation}) => {

    const goToLogin = () => {
        navigation.navigate('Login');
    }
    const goToRegister = () => {
        navigation.navigate('Register');
    }

    return(
        <View>
            <Text>
                Listado de Apartamentos

            </Text>
            <Button title="Go To Login" onPress={()=>goToLogin()}>
            </Button>
            <Button  title="Go To Register" onPress={()=>goToRegister()}>
            </Button>
        </View>

    )

}
export default ApartmentsScreen;
