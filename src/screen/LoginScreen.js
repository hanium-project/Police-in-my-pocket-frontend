import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
} from 'react-native';
import {Dimensions, Image, ImageBackground} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

var {width} = Dimensions.get('window');

const LoginApp = ({navigation}) => {
  //초기값, 변경값 설정
  const [id, setId] = useState(null);
  const [password, setPassword] = useState(null);


  const loginFunction = () => {
    console.log({
      id,
      password
    });

    axios(
      {
          url: 'http://10.0.2.2:8080/api/v1/users/signin',
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
      //AsyncStorage는 String 형태만 저장할 수 있음
      AsyncStorage.setItem('accessToken', response.data.accessToken);
      AsyncStorage.setItem('accessToken', response.data.refreshToken);
      navigation.navigate('Menu');
      alert(response.data.userId + '님 환영합니다!');
  }).catch(function (error) {
      console.log(error);
      alert("fail");
  });
  }

  return (
    <ImageBackground
      source={require('../../assets/imgs/login.png')}
      style={{
        width: width,
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TextInput
        style={{
          width: 380,
          height: 50,
          padding: 10,
          marginTop: 350,
          backgroundColor: '#FFFFFF',
          borderRadius: 27,
          fontSize: 18,
          fontFamily: 'GmarketSansTTFMedium',
          fontStyle: 'normal',
        }}
        onChangeText={(id) => setId(id)}
        value={id}
        placeholder="ID"
      />
      <TextInput
        style={styles.input}
        onChangeText={(password) => setPassword(password)}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TouchableHighlight>
        <View style={styles.button}>
          <Text style={styles.text} onPress={loginFunction}>
            로그인
          </Text>
        </View>
      </TouchableHighlight>
      <Text>&nbsp;</Text>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text
          onPress={() => navigation.navigate('Signup')}
          style={{
            fontFamily: 'GmarketSansTTFMedium',
            color: '#FFFFFF',
            fontSize: 15,
            textDecorationLine: 'underline',
          }}>
          회원가입
        </Text>
        <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
        <Text
        onPress={() => navigation.navigate('Find')}
          style={{
            fontFamily: 'GmarketSansTTFMedium',
            color: '#FFFFFF',
            fontSize: 15,
            textDecorationLine: 'underline',
          }}>
          아이디/비밀번호 찾기
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 380,
    height: 45,
    padding: 10,
    margin: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 27,
    fontSize: 18,
    fontFamily: 'GmarketSansTTFMedium',
    fontStyle: 'normal',
  },

  button: {
    width: 380,
    height: 45,
    paddingTop: 12,
    backgroundColor: '#5982da',
    borderRadius: 27,
    fontSize: 18,
    fontFamily: 'GmarketSansTTFMedium',
    fontStyle: 'normal',
    alignItems: 'center',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#709eff',
  },

  text: {
    fontSize: 18,
    fontFamily: 'GmarketSansTTFMedium',
    color: '#FFFFFF',
  },
});

export default LoginApp;
