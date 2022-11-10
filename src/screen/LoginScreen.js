import React from 'react';
import {
  TextInput,
  TouchableHighlight,
  View,
  Text,
  Dimensions,
  ImageBackground
} from 'react-native';
import {styles} from '../style/StyleScreen';

var {width} = Dimensions.get('window');

const LoginApp = ({navigation}) => {
  //초기값, 변경값 설정
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  return (
    <ImageBackground
      source={require('../../assets/imgs/login.png')}
      style= {styles.loginImageBackground}>
      
      <TextInput
        style={styles.loginTextInput}
        onChangeText={onChangeText}
        value={text}
        placeholder="ID"
      />
      
      <TextInput
        style={styles.loginInput}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Password"
        secureTextEntry={true}
      />
      
      <TouchableHighlight style={styles.loginButton}>
          <Text style={styles.loginText} onPress={() => navigation.navigate('Menu')}>
            로그인
          </Text>
      </TouchableHighlight>
      
      <View style={{flexDirection: 'row'}}>
          <Text
            onPress={() => navigation.navigate('Signup')}
            style={styles.loginText}>
            회원가입
          </Text>
          <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
          <Text
          onPress={() => navigation.navigate('Find')}
            style={styles.loginText}>
            아이디/비밀번호 찾기
          </Text>
      </View>
      
    </ImageBackground>
)};
export default LoginApp;