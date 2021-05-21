import {Dimensions, StyleSheet} from 'react-native';

const LoginStyles=StyleSheet.create({

    container:{
        flex:1,
    },
    LogoContainer:{
        backgroundColor:"orange",
        height:Dimensions.get("screen").height*0.4
    }

});

export default LoginStyles;