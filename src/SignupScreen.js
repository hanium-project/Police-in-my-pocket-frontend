import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";

const TextInANest = () => {
  const [titleText, setTitleText] = useState("폴인포");
  const bodyText1 = "";
  return (
    <Text style={styles.baseText}>
      <Text style={styles.titleText}>
        {titleText}
        {"\n"}
      </Text>
    </Text>
  );
};

export const Header = () =>{
    return(
        <View style = {[styles.container, styles.header]}>
            <Text style = {styles.text}>{TextInANest}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'white',
  }
});

export default TextInANest;