import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  ScrollView
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import RadioForm from 'react-native-simple-radio-button';
import axios from 'axios'

var gender = [
  {value: 'man', label: '남'},
  {value: 'woman', label: '여'},
];
Date.prototype.format = function (f) {
  if (!this.valueOf()) {
    return ' ';
  }

  var weekName = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ];
  var d = this;

  return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function ($1) {
    switch ($1) {
      case 'yyyy':
        return d.getFullYear();
      case 'yy':
        return (d.getFullYear() % 1000).zf(2);
      case 'MM':
        return (d.getMonth() + 1).zf(2);
      case 'dd':
        return d.getDate().zf(2);
      case 'E':
        return weekName[d.getDay()];
      case 'HH':
        return d.getHours().zf(2);
      case 'hh':
        return ((h = d.getHours() % 12) ? h : 12).zf(2);
      case 'mm':
        return d.getMinutes().zf(2);
      case 'ss':
        return d.getSeconds().zf(2);
      case 'a/p':
        return d.getHours() < 12 ? '오전' : '오후';
      default:
        return $1;
    }
  });
};

String.prototype.string = function (len) {
  var s = '',
    i = 0;
  while (i++ < len) {
    s += this;
  }
  return s;
};

String.prototype.zf = function (len) {
  return '0'.string(len - this.length) + this;
};

Number.prototype.zf = function (len) {
  return this.toString().zf(len);
};

const App = ({navigation}) => {
  const [titleText, setTitleText] = useState('회원가입');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [checkpw, setCheckpw] = useState('');
  const [name, setName] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState();
  const [text, onChangeText] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    hideDatePicker();
    onChangeText(date.format('yyyy/MM/dd'));
  };
  const login = (id, password) => {
    alert(`id: ${id} password: ${password}`);
  };

  const [checked, setChecked] = React.useState('남');

  const signupFunction = ({navigation}) => {
    if (password === checkpw) {
      axios(
        {
            url: 'http://10.0.2.2:8080/api/v1/users/signup',
            method: 'post',
            data: {
              userId: id,
              password: password,
              name: name,
              birth: '2022-01-01',
              address: address,
              phoneNumber: phone,
              useSirenCode: parseInt(code),
              gender: checked

            },
            headers: {
                contentType: 'application/json'
            }
        }
      ).then(function (response) {
        console.log(response.data);
        alert('회원가입이 완료되었습니다.');
        navigation.navigate('Login');

      }).catch(function (error) {
        console.log(error);
        //alert("fail");
      });
    } else {
      return alert('비밀번호가 일치하지 않습니다');
    }
  }

  return (
    <ScrollView style={styles.container}>

      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={[styles.header, {flex: 1}]} >
          <Text style={[styles.titleText, {alignItems: 'flex-start', marginRight: -10}]}
          onPress={() => navigation.pop()}>  ＜ </Text>
        </View>
        <View style={styles.header}>
          <Text style={styles.titleText} >
          {'\n'} 
            {titleText}
            {'\n'}
          </Text>
          <Image
            source={require('../../assets/imgs/user.png')}
            style={{
              width: 25,
              height: 25,
              marginLeft: -5
            }}
          />
        </View>
      </View>

      <TextInput
        style={styles.textInput}
        placeholder="아이디"
        label="아이디"
        labelStyle={{marginLeft: 10}}
        placeholderTextColor="white"
        onChangeText={text => setId(text)}
        value={id}
      />

      <TextInput
        style={styles.textInput}
        placeholder="비밀번호"
        placeholderTextColor="white"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />

      <TextInput
        style={styles.textInput}
        placeholder="비밀번호 재확인"
        placeholderTextColor="white"
        onChangeText={text => setCheckpw(text)}
        value={checkpw}
        secureTextEntry={true}
      />

      <TextInput
        style={styles.textInput}
        placeholder="이름"
        placeholderTextColor="white"
        onChangeText={text => setName(text)}
        value={name}
      />

      <View>
        <TouchableOpacity onPress={showDatePicker}>
          <TextInput
            style={styles.textInput}
            pointerEvents="none"
            placeholder="생년월일"
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
            editable={false}
            value={text}
          />
          <DateTimePickerModal
            headerTextIOS="생년월일"
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </TouchableOpacity>
      </View>

      <View>
        <RadioForm
          style={{
            marginLeft: '3%'
          }}
          radio_props={gender}
          initial={0}
          onPress={value => {}}
          buttonSize={15}
          buttonOuterSize={15}
          selectedButtonColor={'black'}
          labelStyle={{
            fontSize: 15,
            fontFamily: 'GmarketSansTTFMedium',
            marginLeft: '10%',
          }}
          disable={true}
          formHorizontal={true}
        />
      </View>

      <TextInput
        style={styles.textInput}
        placeholder="주소"
        placeholderTextColor="white"
        onChangeText={text => setAddress(text)}
        value={address}
      />

      <TextInput
        style={styles.textInput}
        placeholder="휴대전화"
        placeholderTextColor="white"
        onChangeText={text => setPhone(text)}
        value={phone}
      />

      <TextInput
        style={styles.textInput}
        placeholder="보안코드"
        placeholderTextColor="white"
        onChangeText={text => setCode(text)}
        value = {code}
      />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={signupFunction}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6799FF',
    fontFamily: 'GmarketSansTTFMedium',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 3,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'GmarketSansTTFMedium',
    marginLeft: -60,
  },
  textInput: {
    margin: '2%',
    borderRadius: 20,
    backgroundColor: '#bdd2ff',
    fontFamily: 'GmarketSansTTFMedium',
    color: 'white',
    flexWrap: 'wrap',
    width: '90%',
  },
  submitButton: {
    backgroundColor: '#043BFF',
    borderRadius: 20,
    padding: '3%',
    margin: '5%',
    alignItems: 'center',
    fontFamily: 'GmarketSansTTFMedium',
  },
  radio: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '5%',
    marginRight: '5%',
  },
  submitButtonText: {
    color: 'white',
  },
});
export default App;
