import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import {styles} from '../style/StyleScreen'

const App = ({navigation}) => {
  const [titleText] = useState('회원정보 수정');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [emergency1, setEmergency1] = useState('');
  const [emergency2, setEmergency2] = useState('');
  const [emergency3, setEmergency3] = useState('');

  return (
    <View style={styles.editContainer}>
      <View style={styles.editHeader}>
        <Text style={styles.editTitleText}>
          {'\n'}
          {titleText}
          {'\n'}
        </Text>
      </View>

      <TextInput
        style={styles.editTextInput}
        placeholder="주소"
        placeholderTextColor="white"
        onChangeText={text => setAddress(text)}
        value={address}
      />

      <TextInput
        style={styles.editTextInput}
        placeholder="휴대전화"
        placeholderTextColor="white"
        onChangeText={text => setPhone(text)}
        value={phone}
      />

      <TextInput
        style={styles.editTextInput}
        placeholder="비상연락처1"
        placeholderTextColor="white"
        onChangeText={text => setEmergency1(text)}
        value={emergency1}
      />

      <TextInput
        style={styles.editTextInput}
        placeholder="비상연락처2"
        placeholderTextColor="white"
        onChangeText={text => setEmergency2(text)}
        value={emergency2}
      />

      <TextInput
        style={styles.editTextInput}
        placeholder="비상연락처3"
        placeholderTextColor="white"
        onChangeText={text => setEmergency3(text)}
        value={emergency3}
      />

      <TouchableOpacity
        style={styles.editSubmitButton}>
        <Text style={styles.editSubmitButtonText} onPress={() => navigation.navigate('MyPage')}>확인</Text>
      </TouchableOpacity>
    </View>
  );
};
export default App;
