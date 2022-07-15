import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import MapView, {Circle, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { PermissionsAndroid } from 'react-native';
import MyButton from '../component/MyButton';
import SearchBar1 from '../component/SearchBar1';
import SearchBar2 from '../component/SearchBar2';

async function requestPermission() {
  try {
    if (Platform.OS === "ios") {
      return await Geolocation.requestAuthorization("always");
    }
    // 안드로이드 위치 정보 수집 권한 요청
    if (Platform.OS === "android") {
      return await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }
  } catch (e) {
    console.log(e);
  }
}

const MainScreen = ({navigation}) => {
  const [location, setLocation] = useState();
useEffect(() => {
  requestPermission().then(result => {
    console.log({ result });
    if (result === "granted") {
      Geolocation.getCurrentPosition(
        pos => {
          setLocation(pos.coords);
        },
        error => {
          console.log(error);
        },
        {
          enableHighAccuracy: true,
          timeout: 3600,
          maximumAge: 3600,
        },
      );
    }
  });
}, []);

if (!location) {
  return (
    <View>
      <Text>Splash Screen</Text>
    </View>
  );
}

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={{
            alignSelf: 'flex-start',
            fontSize: 12,
            color: '#ffffff',
            marginBottom: 10,
            fontFamily: 'GmarketSansTTFMedium',
          }}>
          내 손안의 작은 경호원
        </Text>

        <View style={{flexDirection: 'row', alignSelf: 'flex-start'}}>
          <Text style={styles.title}>Police In My Pocket 안심귀가 서비스</Text>
          <Image
            source={require('../../assets/imgs/police-car.png')}
            style={{
              width: 30,
              height: 30,
              marginLeft: 10,
            }}
          />
        </View>
      </View>

      <View style={{
        width: '90%',
      }}>
      <Text style={{
              alignSelf: 'flex-end',
              fontSize: 11,
              color: '#ffffff',
              marginBottom: 10,
              fontFamily: 'GmarketSansTTFMedium',
              borderBottomColor: 'white',
              borderBottomWidth: 1
            }}>
      자주 이용하는 목적지 불러오기
      </Text>
      </View>
  
      <View style={styles.content1}>
        <SearchBar1 />
        <SearchBar2 />
      </View>

      <View style={styles.content}>
        <MapView
          style={{
            width: '90%',
            height: '90%',
            borderRadius: 20,
            overflow: 'hidden',
            borderWidth: 1,
          }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          showsMyLocationButton={true}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008,
          }}>
          <Marker
              coordinate={{latitude: location.latitude,
              longitude: location.longitude}}
              title={"현재 위치"}
              draggable={true}
          />
          <Circle
            center={{latitude: location.latitude,
              longitude: location.longitude}}
            radius={380}
            fillColor='rgba(0,94,255,0.09)'
            strokeColor='rgba(0,94,255,0)'
          />
        </MapView>
      </View>

      <View style={styles.footer}>
        <Text
          style={{
            color: '#FFFFFF',
            alignItems: 'center',
            paddingBottom: 5,
            fontFamily: 'GmarketSansTTFMedium',
          }}>
          안심귀가를 시작하겠습니까?
        </Text>
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
    backgroundColor: '#6799FF',
  },
  header: {
    width: '100%',
    height: '10%',
    //backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  content1: {
    width: '100%',
    height: '9%',
    //backgroundColor: 'yellow',
    flexDirection: 'row',
  },
  content: {
    width: '90%',
    height: '60%',
    //backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'white',
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
    fontSize: 15,
    color: '#ffffff',
    marginBottom: 10,
    fontFamily: 'GmarketSansTTFMedium',
  },
});

export default MainScreen;
