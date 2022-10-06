import React, { useEffect, useRef, useState } from "react";
import {Text, Pressable, StyleSheet, Alert, Linking} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

const Button_address = (n) => {
    const addAddressFunction = async() => {
        const token = await AsyncStorage.getItem('accessToken');
        console.log('name', n);
        // console.log('tel', c);
        // console.log('relationship', r);
        axios(
          {
            url: 'http://10.0.2.2:8080/api/v1/contact',
            method: 'post',
            data: {
              name: n.n,
              contact: n.c,
              relationship: n.r
            },
            headers: {
              contentType: 'application/json',
              Authorization: `Bearer ${token}`
            }
          }
        ).then(function (response) {
          console.log(response.data);
          alert('전화번호가 등록되었습니다.');
        }).catch(function (error) {
          console.log(error);
          alert('fail');
        })
      }

    return (
        <Pressable style={styles.button}  onPress={addAddressFunction}>
            <Text style={styles.buttonText}>등록</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#043BFF',
        padding: 10,
        borderRadius:15,
        width: '80%',
      },
      buttonText: {
        fontSize: 18,
        color: '#FFFFFF',
        marginLeft: 11,
        marginRight: 11,
        marginTop: 3,
        marginBottom: 3,
        fontFamily: 'GmarketSansTTFMedium',
      }
  });

export default Button_address;