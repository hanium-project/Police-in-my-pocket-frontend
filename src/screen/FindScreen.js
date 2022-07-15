import React, {useState} from 'react';
import {
  Platform,
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Component,
  Image,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {createAppContainer} from 'react-navigation';
import FindId from "./FindIdScreen";
import FindPw from "./FindPwScreen";

const Tab = createMaterialTopTabNavigator();
const Find  = ({navigation}) => {
    const [titleText, setTitleText] = useState('아이디 찾기');
    
    return (
        <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: '#709eff',
        },
        indicatorStyle: {
          backgroundColor: '#709eff'
        }
      })}
      > 
          <Tab.Screen style={styles.container} name="아이디 찾기" component={FindId} />
          <Tab.Screen style={styles.container} name="비밀번호 찾기" component={FindPw} />
        </Tab.Navigator>
      );
  
  }

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#709eff',
  },

  text: {
    fontSize: 13,
    fontFamily: 'GmarketSansTTFMedium',
    color: '#FFFFFF',
  }
}
  );
  export default Find;