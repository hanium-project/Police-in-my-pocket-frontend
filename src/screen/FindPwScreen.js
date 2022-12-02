import React, {useState} from 'react';
import { View, TextInput, Text, TouchableHighlight } from 'react-native';
import {styles} from '../style/StyleScreen';

const FindPw  = ({navigation}) => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [titleText, setTitleText] = useState('비밀번호 찾기');
  return(

    <View style={styles.editContainer}>
      <Text
        style={styles.findPwText}>
        {titleText}
      </Text>
      
      <View style={styles.numHeader}>
        <TextInput
          style={styles.idInput}
          onChangeText={onChangeNumber}
          value={text}
          placeholder="아이디 입력(E-MAIL)"/>

          <TouchableHighlight>
            <View style={styles.idButton}>
              <Text style={styles.idText} onPress={() => navigation.navigate('Menu')}>
                { "인증 메일 \n 보내기"}
              </Text>
            </View>
          </TouchableHighlight>
          
      </View>
    </View>
);}

export default FindPw;