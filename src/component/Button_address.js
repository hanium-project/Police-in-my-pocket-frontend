import React from "react";
import {Text, Pressable, Linking} from 'react-native';
import {styles} from '../style/componentStyle';

const Button_address = () => {
    return (
        <Pressable style={[styles.myButton, {width: '80%'}]}  
            onPress={() =>Linking.openURL('https://www.google.co.kr/')}>
            <Text style={[styles.myButtonText, {fontSize: 18}]}> 등록 </Text>
        </Pressable>
    )
}

export default Button_address;