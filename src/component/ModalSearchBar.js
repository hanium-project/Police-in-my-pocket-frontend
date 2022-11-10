import React, { useEffect, useState, useRef } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import {styles} from '../style/componentStyle';
import Geolocation from 'react-native-geolocation-service';
import { PermissionsAndroid } from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

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

const ModalSearchBar = ({getData,}) =>  {
  const [location, setLocation] = useState();
  const ref = useRef();

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
      ref.current?.setAddrressText('');
  }, []);

  if (!location) {
      return (
        <View>
          <Text>Splash Screen</Text>
        </View> 
      );
  }

  return (
    <View style={[styles.block, {width: '90%'}, {height: '63%'}, {marginEnd:'6%'}]}>
      <GooglePlacesAutocomplete
          placeholder={'주요 목적지를 입력하세요.'}
          minLength={2}
          returnKeyType={'search'}
          fetchDetails={true}
          ref={input => {this.googleInput3 = input}}
          renderRightButton={() => (
            <TouchableOpacity onPress={() => {
              this.googleInput3.clear();
              /*getData({
                latitude: location.latitude,
                longitude: location.longitude
              })*/ }
            }>
              <Image
                source={require('../../assets/imgs/clear1.png')}
                style={styles.clearImg} />
            </TouchableOpacity>
          )}
          autoFocus={false}
          nearbyPlacesAPI='GooglePlacesSearch'
          onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = trued
              console.log(data.description);  //한글 주소
              console.log("목적지 위도: " + details.geometry.location.lat); //위도 추출
              console.log("목적지 경도: " + details.geometry.location.lng); //경도 추출

              /*getData({
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
                latitudeDelta: 0.011,
                longitudeDelta: 0.011
              })*/
          }}
          listViewDisplayed={false}
          query={{
            key: 'AIzaSyB_DOAebHbAvs_A3vcY7j5-emd-dqYGRu4',
            language: 'ko',
            components: 'country:kor',
            rankby: 'distance',
            radius: 420,
            location: `${location.latitude}, ${location.longitude}`
          }}
          renderDescription={row => row.description}
          styles={{
            listView: {
                position: 'absolute',
                b4ckgroundColor: "white",
                width: '100%',
                zIndex: 9999,
                marginTop: 45
            }
          }}
        />    
    </View>
  );
}

export default ModalSearchBar;