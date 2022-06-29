import * as React from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MyButton from '../component/MyButton';
import SearchBar1 from '../component/SearchBar1';
import SearchBar2 from '../component/SearchBar2';

const MainScreen = () => {
  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
        <Text style = {styles.title}>폴인포</Text>
      </View>
      <View style = {styles.content1}>
        <SearchBar1/>
        <SearchBar2/>
      </View>
      <View style = {styles.content}>
        <MapView 
              style={{ width: '90%', height: '100%', }} 
              provider={PROVIDER_GOOGLE}
              initialRegion={{ latitude: 37.601948, longitude: 127.041518, latitudeDelta: 0.008, longitudeDelta: 0.008, }} 
            ></MapView>
      </View>
      <View style={styles.footer}>
        <Text style ={{color:'#FFFFFF', alignItems:'center', paddingBottom:5, fontFamily:'GmarketSansTTFMedium'}} >안심귀가를 시작하겠습니까?</Text>
        <MyButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6799FF'
  },
  header: {
    width: '100%',
    height: '10%',
    //backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  map: {
    width: '100%', height: '100%'
  }, 
  content1: {
    width: '100%',
    height: '10%',
    //backgroundColor: 'yellow',
    flexDirection: 'row',
  },
  content: {
    width: '100%',
    height:'65%',
    //backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    width: '100%',
    height: '15%',
    //backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    alignSelf: 'flex-start',
    fontSize: 40,
    color: '#ffffff',
    marginBottom: 10,
    fontFamily: 'GmarketSansTTFMedium',
  },
});
 
export default MainScreen;