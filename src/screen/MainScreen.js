import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, Modal, Pressable, Platform} from 'react-native';
import MapView, {Circle, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { PermissionsAndroid } from 'react-native';
import MyButton from '../component/MyButton';
import SearchBar1 from '../component/SearchBar1';
import SearchBar2 from '../component/SearchBar2';
import { ScrollView } from 'react-native-gesture-handler';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';

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
  const [modalOpen, setModalOpen] = useState(false);
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
    //<ScrollView contentContainerStyle={{flex:1}}>
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row', alignSelf: 'flex-start', width: '100%',
              height: 20,
              marginLeft: 10,
              marginTop: 10,
              }}>
          <Text style={styles.title}>Police In My Pocket 안심귀가 서비스</Text>
          <Image
            source={require('../../assets/imgs/police-car.png')}
            style={{
              width: 25,
              height: 18,
              marginLeft: 8,
            }}
          />
        </View>
      </View>

      <View style={{ width: '90%', }}>
      <TouchableOpacity onPress={() => setModalOpen(true)}>      
        <Text style={{
              alignSelf: 'flex-end',
              fontSize: 11,
              color: '#ffffff',
              marginTop: 14,
              fontFamily: 'GmarketSansTTFMedium',
              borderBottomColor: 'white',
              borderBottomWidth: 1
            }}>
        자주 이용하는 목적지 불러오기
        </Text>
        <Modal visible={modalOpen}
          animationType={"fade"}
          transparent={true}
          style={styles.modalBox}
          onRequestClose={() => { //backbutton으로 modal을 닫는 기능
            setModalOpen(false);
          }}>
          <View style={styles.modalBox}>
            <View style={styles.modalContent}>
              <View style={{flexDirection: 'row', width: '90%', flex: 0.5}}>
                <Text style={styles.modalTitle}>자주 사용하는 목적지</Text>
                <Pressable style={styles.btn} onPress={() => setModalOpen(false)}>
                  <Text style={styles.modalText}>닫기</Text>
                </Pressable>
              </View>
              <View style={{flex: 3}}>

              </View>
              <View style={{alignItems: 'center', width: '90%', flex: 0.5}}>
                <Pressable style={styles.btn2} onPress={() => setModalOpen(false)}>
                    <Text style={styles.modalText}>등록</Text>
                </Pressable>
              </View>
            </View>
          </View>
      </Modal>
      </TouchableOpacity>
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
              onPress={() => {
                  fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + location.latitude + ',' + location.longitude
                  + '&key=AIzaSyAx0vC5rUuV7PT72y03BDwK79Yu2ByP3Hw' + '&language=ko')
                .then((response) => response.json())
                .then((responseJson) => {
                  console.log(responseJson.results[0].formatted_address);
                }).catch((err) => console.log("udonPeople error : " + err));
              }}
              onDragStart={(e) => {
                console.log("Drag start", e.nativeEvent.coordinates)
              }}
              onDragSEnd={(e) => {
                console.log("Drag end", e.nativeEvent.coordinates)
              }}
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
    //</ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6799FF',
  },
  header: {
    width: '100%',
    height: '5%',
    //backgroundColor: 'blue',
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  content1: {
    //backgroundColor: 'green',
    width: '100%',
    height: '20%',
  },
  content: {
    width: '90%',
    height: '55%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 4
  },
  footer: {
    //backgroundColor: 'blue',
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    alignSelf: 'flex-start',
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 3,
    fontFamily: 'GmarketSansTTFMedium',
  },
  modalText: {
    fontSize: 15,
    color: '#FFFFFF',
    marginLeft: 11,
    marginRight: 11,
    marginTop: 3,
    marginBottom: 3,
    fontFamily: 'GmarketSansTTFMedium',
  }, 
  btn: {
    alignItems: 'center',
    backgroundColor: '#043BFF',
    padding: 10,
    borderRadius:27,
    width: 75,
    height: 40,
    marginTop: 10,
    marginRight: 10,
    marginLeft: 85
  },
  btn2: {
    alignItems: 'center',
    backgroundColor: '#043BFF',
    padding: 10,
    borderRadius:27,
    width: 75,
    height: 40,
  }, 
  modalBox: {
    margin: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(102, 102, 102, 0.8)'
  },
  modalTitle: {
    alignSelf: 'flex-start',
    fontSize: 18,
    color: '#043BFF',
    marginTop: 20,
    fontFamily: 'GmarketSansTTFMedium',
  },
  modalContent: {
    width: '90%',
    height: '60%',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
  }
});

export default MainScreen;