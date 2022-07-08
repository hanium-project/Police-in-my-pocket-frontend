import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import styled from 'styled-components';
import {TouchableOpacity} from 'react-native-gesture-handler';
<<<<<<< HEAD
import { PermissionsAndroid } from 'react-native';
=======
>>>>>>> 9bd8ea32b4890538f747ad2fc5d7c5f872d8bfd5

const ViewContainerMap = styled.View`
  flex: 1;
  justifycontent: center;
  aliginitems: center;
  backgroundcolor: #709eff;
`;

const ViewContainerButton = styled.View`
  flex: 1;
  justifycontent: center;
  aliginitems: center;
  backgroundcolor: #709eff;
`;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 8,
    margin: 8,
    flexDirection: 'row',
    borderRadius: 20,
  },
});
<<<<<<< HEAD

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

  const MapExample = ({navigation}) => {
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
=======
const MapExample = ({navigation}) => {
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);

        const lo = JSON.stringify(position.coords.longitude);
        const la = JSON.stringify(position.coords.latitude);
        setLongitude(lo);
        setLatitude(la);
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  });
>>>>>>> 9bd8ea32b4890538f747ad2fc5d7c5f872d8bfd5

  return (
    <>
      <ViewContainerMap>
        <MapView
          style={{
            width: '80%',
            height: '80%',
            position: 'absolute',
            marginLeft: 43,
          }}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
<<<<<<< HEAD
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
=======
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
>>>>>>> 9bd8ea32b4890538f747ad2fc5d7c5f872d8bfd5
          }}
        />
      </ViewContainerMap>
      <ViewContainerButton>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require('../../assets/imgs/police-car.png')}
            style={{
              width: 30,
              height: 30,
              marginLeft: 10,
            }}></Image>
          <Text>&nbsp;&nbsp;&nbsp;</Text>
          <Text>긴급상황 발생! 인근 파출소 혹은 가족에게 신고하기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require('../../assets/imgs/police-car.png')}
            style={{
              width: 30,
              height: 30,
              marginLeft: 10,
            }}></Image>
          <Text>&nbsp;&nbsp;&nbsp;</Text>
          <Text>안심 귀가 서비스 이용하기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require('../../assets/imgs/police-car.png')}
            style={{
              width: 30,
              height: 30,
              marginLeft: 10,
            }}></Image>
          <Text>&nbsp;&nbsp;&nbsp;</Text>
          <Text>주요 연락처 등록하기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require('../../assets/imgs/police-car.png')}
            style={{
              width: 30,
              height: 30,
              marginLeft: 10,
            }}></Image>
          <Text>&nbsp;&nbsp;&nbsp;</Text>
          <Text>실시간 위험 지역 / 치안 시설 정보 확인하기</Text>
        </TouchableOpacity>
      </ViewContainerButton>
    </>
  );
};

export default MapExample;
