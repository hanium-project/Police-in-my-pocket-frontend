import React from 'react';
import { 
  TextInput,  
  View, 
  Text,  
  Pressable,
  TouchableHighlight,
  Linking
} from 'react-native';
import {Dimensions, Image} from 'react-native';
import Button_address from '../component/Button_address';
import ModalSearchBar from '../component/ModalSearchBar';
import {styles} from '../style/StyleScreen';

var {width} = Dimensions.get('window');

const AddressApp = ({navigation}) => {

  return (     
    <View style = {styles.container}>
      <View style = {styles.header}>
        <Text style = {styles.title} onPress={() => navigation.pop()}>
           ＜ 주요 목적지/연락처 등록{"\r"}
          <TouchableHighlight onPress={() =>Linking.openURL('https://www.google.co.kr/')}>
            <Image style ={{width: 20, height: 20, alignSelf: 'flex-end'}} source = {require('../../assets/imgs/user.png')}/>
          </TouchableHighlight>
          {"\n\n\n"}
          </Text>
      </View>

      <View style = {styles.content}>
        <Text style = {styles.text}>{"\n\n"}이름{"\n"}</Text>
          <TextInput style={styles.input} placeholder="이름을 입력하세요." />
            <Pressable
                style={({pressed}) => [styles.button, pressed && {opacity: 0.5}]}>
            </Pressable>
          <Text>{"\n"}</Text>

          <Text style = {styles.text}>{"\n"}주요 목적지{"\n"}</Text>
          <View style = {styles.barContent}>
            <ModalSearchBar />
          </View>

          <Text style = {styles.text}>연락처 ( - 제외 ){"\n"}</Text>
          <TextInput style={styles.input} placeholder="연락처를 입력하세요." />
            <Pressable
                style={({pressed}) => [styles.button, pressed && {opacity: 0.5}]}>
            </Pressable>
          <Text>{"\n"}</Text>

          <Text style = {styles.text}>관계{"\n"}</Text>
          <TextInput style={styles.input} placeholder="관계를 입력하세요." />
            <Pressable
                style={({pressed}) => [styles.button, pressed && {opacity: 0.5}]}>
            </Pressable>
          <Text>{"\n"}</Text>
      </View>

      <View style={styles.footer}>
        <Button_address/>
      </View>
  </View> 
)}

export default AddressApp;