import React, {useState} from 'react';
import { View, TextInput, Text, TouchableHighlight } from 'react-native';
import {styles} from '../style/StyleScreen';

const FindId  = ({navigation}) => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [titleText, setTitleText] = useState('아이디 찾기');
  return(

    <View style={styles.editContainer}>
      <Text
        style={{
          fontFamily: 'GmarketSansTTFMedium',
          color: '#FFFFFF',
          fontSize: 18,
          marginTop: '5%',}} >
        {titleText}
      </Text>

      <View style={styles.numHeader}>
        <TextInput
          style={styles.numStyle}
          onChangeText={onChangeNumber}
          value={text}
          placeholder="휴대폰 번호 (숫자만 입력)" />

        <TouchableHighlight>
          <View style={styles.numButton}>
            <Text style={styles.numText} onPress={() => navigation.navigate('Menu')}>
              인증번호
            </Text>
          </View>
        </TouchableHighlight>
      </View>

      <TextInput
        style={styles.numInput}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="인증번호 입력"
        secureTextEntry={true} />
    </View>
);}

export default FindId;
