import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import {styles} from '../style/StyleScreen'

const EditPw  = ({navigation}) => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [titleText, setTitleText] = useState('비밀번호 변경');
  return(
  <View style={styles.editContainer}>
    <Text
    style={{
      fontFamily: 'GmarketSansTTFMedium',
      color: '#FFFFFF',
      fontSize: 18,
      marginTop: 20,
        }}>
      {titleText}
    </Text>

    <View style={styles.editHeader}>
      <TextInput
        style={styles.editInput}
        onChangeText={onChangeNumber}
        value={text}
        placeholder="새 비밀번호 입력"/>
    </View>

    <TextInput
      style={styles.editInput}
      onChangeText={onChangeNumber}
      value={number}
      placeholder="비밀번호 재 입력"
      secureTextEntry={true}/>

    <TouchableOpacity
      style={styles.editSubmitButton}>
      <Text style={styles.editSubmitButtonText} onPress={() => navigation.navigate('MyPage')}>확인</Text>
    </TouchableOpacity>

  </View>
  );
}
export default EditPw;
