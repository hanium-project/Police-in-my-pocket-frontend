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
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

var {width} = Dimensions.get('window');

const LoginApp = ({navigation}) => {
  //초기값, 변경값 설정
  const [id, setId] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  const loginFunction = () => {
    console.log({
      id,
      password
    });

    axios(
      {
          url: 'http://10.0.2.2/api/v1/users/signin',
          method: 'post',
          data: {
             userId: id,
             password: password
          },
          headers: {
              contentType: 'application/json'
          }
      }
  ).then(function (response) {
      console.log(response.data.accessToken);
      AsyncStorage.setItem('accessToken', response.data.accessToken);
      AsyncStorage.setItem('refreshToken', response.data.refreshToken);
      alert(id + '님 환영합니다!');
      navigation.navigate('Menu');
  }).catch(function (error) {
      console.log(error);
      alert("fail");
  });
  }


  return (
    <ImageBackground
      source={require('../../assets/imgs/login.png')}
      style= {styles.loginImageBackground}>
      
      <TextInput
        style={styles.loginTextInput}
        onChangeText={(id) => setId(id)}
        value={id}
        placeholder="ID"
      />
      
      <TextInput
        style={styles.loginInput}
        onChangeText={(password) => setPassword(password)}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
      />
      
      <TouchableHighlight style={styles.loginButton}>
          <Text style={styles.loginText} onPress={loginFunction}>
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