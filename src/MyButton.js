MyButton.js

import React from "react";
import {Text, Pressable, StyleSheet} from 'react-native';

const MyButton = () => {
    return (
        <Pressable style={styles.button}
            onPress={() => alert("경고음이 울립니다.")}
        >
            <Text style={styles.buttonText}>START</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#043BFF',
        padding: 10,
        borderRadius:15
      },
      buttonText: {
        fontSize: 25,
        color: '#FFFFFF',
        marginLeft: 11,
        marginRight: 11,
        marginTop: 3,
        marginBottom: 3,
      }
  });

export default MyButton;