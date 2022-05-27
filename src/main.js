import * as React from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import MyButton from './MyButton';
import SearchBar1 from './SearchBar1';
import SearchBar2 from './SearchBar2';

const App = () => {
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
        <Image
          style={{height:'100%', width:'100%', resizeMode:'contain'}}
          source={require('./map.jpg')}/>
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
 
export default App;