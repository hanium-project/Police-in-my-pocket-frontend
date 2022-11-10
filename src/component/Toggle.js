import React, {useState} from 'react';
import {Text, View, Alert} from 'react-native';
import {Switch} from 'react-native-paper' ;
import {styles} from '../style/componentStyle';
  
const ToggleSwitchExample = () =>{
    const [switchOn, setSwitchOn] = useState(false)
  
    return(
        <View style ={styles.toggleContainer}>
            <Text style={styles.toggleText}> 사용자 음성인식 </Text>
            <View>
                <Switch value={switchOn} onValueChange={() => {
                    setSwitchOn(!switchOn)
                    if (switchOn == false)
                        Alert.alert("사용자 음성 인식을 시작합니다.")
                    else
                        Alert.alert("사용자 음성 인식을 취소합니다.")
                    }} />
            </View>
        </View>
    )
}
  
export default ToggleSwitchExample ;