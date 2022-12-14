import React, {useEffect, useState, useRef} from 'react';
import {Text, View, Image} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapView, {Marker, PROVIDER_GOOGLE, } from 'react-native-maps';
import styled from 'styled-components';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { styles } from '../style/StyleScreen';


const ViewContainerMap = styled.View`
  flex: 1;
  justifyContent: center;
  backgroundColor: #709eff;
  fontFamily: GmarketSansTTFMedium;
`;

const ViewContainerList = styled.View`
  flex: 1;
  justifyContent: center;
  alignItem: center;
  backgroundColor: #709eff;
  fontFamily: GmarketSansTTFMedium;
`;

const MarkerCustomFont = styled.Text`
  color: white;
  fontFamily: GmarketSansTTFMedium;
  fontSize: 10px;
`

const ListCustomFont = styled.Text`
  fontFamily: GmarketSansTTFMedium;
  marginTop: 10%;
  fontSize: 18px;
  color: black;
`

const CountCustomFont = styled.Text`
  fontFamily: GmarketSansTTFMedium;
  marginTop: 5%;
  fontSize: 13px;
  color: black;
`

const safeRegion = {
  latitude: 37.78888, 
  longitude: -122.4350,
  latitudeDelta: 0.005,
  longitudeDelta: 0.005,
}

const dangerRegion = {
  latitude: 37.79000, 
  longitude: -122.4324,
  latitudeDelta: 0.005,
  longitudeDelta: 0.005,
}

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
  const changeLocation = useRef(null);
  const [dangerLocations, setDangerLocations] = useState();
  const [safeLocations, setSafeLocations] = useState();

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
    })

    const token = AsyncStorage.getItem('accessToken');
    console.log('token', token);
    axios(
      {
          url: 'http://10.0.2.2/api/v1/emergency',
          method: 'get',
          headers: {
              contentType: 'application/json',
              Authorization: `Bearer ${token}`
          }
      }
    ).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.log(error);
    });
  }, []);

  const goToSafeArea = () => {
    changeLocation.current.animateToRegion(safeRegion, 1 * 1000);
  }

  const goToDangerArea = () => {
    changeLocation.current.animateToRegion(dangerRegion, 1 * 1000);
  }


  return (
    <>
      <View style={{flexDirection: 'row', backgroundColor: '#709eff',}}>
        <View style={{
          marginTop: '4%',
        }}>
          <Text style={styles.informText} onPress={() => navigation.pop()}> ＜ </Text>
        </View>
        <View>
          <Text style={styles.informText1}>OOO님, 환영합니다.</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{
                fontFamily:'GmarketSansTTFMedium',
                color: 'white',
                marginTop: '1%',
                fontSize: 10,
                marginLeft: '55%'
            }}>로그아웃 </Text>
            <Text style={styles.informText2}>마이페이지</Text>
          </View>
        </View>
        <Image source={require('../../assets/imgs/user2.png')}
          style={styles.informImg}></Image>
      </View>
      <ViewContainerMap>
        <View style={{flexDirection: 'row', marginBottom: '1%', alignItems: 'flex-end', }}>
          <Text style={styles.informTitle}>실시간 위험 지역 / 치안 시설 정보</Text>
          </View>
          <View style={styles.informView}>
            <MapView.Animated
              style={{
                width: '100%',
                height: '87%',
              }}
              ref={changeLocation}
              showsMyLocationButton={true}
              showsUserLocation={true}
              provider={PROVIDER_GOOGLE}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
              }}    
            >
              <Marker
                coordinate={{latitude: 37.78825, longitude: -122.4324}}
                title="current location"
                description="this is a current location marker"
              >
                <Image source={require('../../assets/imgs/placeholder.png')} style={{ width: 40, height: 40 }}></Image>
              </Marker>
              <Marker
                coordinate={{latitude: 37.79000, longitude: -122.4324}}
                title="danger location"
                description="this is a danger location marker"
              >
                <Image source={require('../../assets/imgs/placeholder_danger.png')} style={{ width: 40, height: 40 }}></Image>
              </Marker>
              <Marker
                coordinate={{latitude: 37.78888, longitude: -122.4350}}
                title="safe location"
                description="this is a safe location marker"
              >
                <Image source={require('../../assets/imgs/placeholder_safe.png')} style={{ width: 40, height: 40 }}></Image>
              </Marker>
            </MapView.Animated>
          </View>
      </ViewContainerMap>
      <View style={{flexDirection: 'row', backgroundColor: '#709eff',}}>
          <Image source={require('../../assets/imgs/placeholder.png')}
            style={{
              width: 12,
              height: 12,
              marginLeft: '5%',
          }}></Image>
          <MarkerCustomFont>현재 위치</MarkerCustomFont>
          <Image source={require('../../assets/imgs/placeholder_danger.png')}
              style={{
                width: 12,
                height: 12,
          }}></Image>
          <MarkerCustomFont>위험 지역</MarkerCustomFont>
          <Image source={require('../../assets/imgs/placeholder_safe.png')}
              style={{
                width: 12,
                height: 12,
              }}></Image>
          <MarkerCustomFont>치안 시설</MarkerCustomFont>
          </View>
        <ViewContainerList>
            <ScrollView style={{
            padding: 0,
            borderRadius: 10,
            backgroundColor: 'white',
            width: '95%',
            height: '10%',
            marginLeft: '2.7%',
            marginTop: '2%',
            marginBottom: '4%',
          }}>
            <TouchableOpacity onPress={() => goToSafeArea()} style={{flexDirection: 'row',}}>
                <Image source={require('../../assets/imgs/placeholder_safe.png')}
                    style={{
                        width: 50,
                        height: 50,
                        margin: '3%'
                    }}></Image>
                <View><ListCustomFont>safe location</ListCustomFont>
                    <CountCustomFont>치안 시설</CountCustomFont>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => goToDangerArea()} style={{flexDirection: 'row',}}>
                <Image source={require('../../assets/imgs/placeholder_danger.png')}
                    style={{
                        width: 50,
                        height: 50,
                        margin: '3%'
                    }}></Image>
                <View><ListCustomFont>위험 지역</ListCustomFont>
                    <CountCustomFont>위험 발생 건수 : 1회</CountCustomFont>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('safe location click')} style={{flexDirection: 'row',}}>
                <Image source={require('../../assets/imgs/placeholder_safe.png')}
                    style={{
                        width: 50,
                        height: 50,
                        margin: '3%'
                    }}></Image>
                <View><ListCustomFont>동덕여대 경비실</ListCustomFont>
                    <CountCustomFont>치안 시설</CountCustomFont>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('danger location click')} style={{flexDirection: 'row',}}>
                <Image source={require('../../assets/imgs/placeholder_danger.png')}
                    style={{
                        width: 50,
                        height: 50,
                        margin: '3%'
                    }}></Image>
                <View><ListCustomFont>어두운 골목길</ListCustomFont>
                    <CountCustomFont>위험 발생 건수 : 32회</CountCustomFont>
                </View>
            </TouchableOpacity>
            </ScrollView>
        </ViewContainerList>
      </>
  );
};

export default MapExample;