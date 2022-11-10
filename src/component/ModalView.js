import React, {useState} from 'react';
import {Text, View, Pressable, Modal, TouchableOpacity} from 'react-native';
import {styles} from '../style/componentStyle';
import Geolocation from 'react-native-geolocation-service';

const ModalView = ({reg1, getData, reg2, getData2, reg3, getAddress1, reg4, getAddress2}) =>  {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <TouchableOpacity onPress={() => setModalOpen(true)}>     
      <Text style={styles.modal}> 자주 이용하는 목적지 불러오기 </Text>
      <Modal visible={modalOpen}
          animationType={"fade"}
          transparent={true}
          style={styles.modalBox}
          onRequestClose={() => { setModalOpen(false);}} >

      <View style={styles.modalBox}>
        <View style={styles.modalContent}>
          <View style={{flexDirection: 'row', width: '90%', flex: 0.5}}>
            <Text style={styles.modalTitle}> 자주 사용하는 목적지 </Text>
            <Pressable style={styles.modalBtn} onPress={() => setModalOpen(false)}>
              <Text style={styles.modalClose}> 닫기 </Text>
            </Pressable>
          </View>
          
          <Pressable style={styles.modalAddressBox}>
            <Text style={[styles.modalText]}> 출발지 </Text>
            <View style= {styles.modalAddress}>
              <Text style={styles.modalAddressText} 
                onPress={() => {
                  getData({
                    latitude: 37.602226,
                    longitude: 127.0416012,
                  }); 
                  fetch('https://maps.googleapis.com/maps/api/geocode/json?address=37.602226,127.0416012'
                    + '&key=AIzaSyB_DOAebHbAvs_A3vcY7j5-emd-dqYGRu4' + '&language=ko')
                  .then((response) => response.json())
                  .then((responseJson) => {
                    console.log("자주 이용하는 출발지 주소: " + responseJson.results[0].formatted_address);
                    //Address 메인으로 넘겨주기
                    getAddress1(responseJson.results[0].formatted_address) })
                  .catch((err) => console.log("udonPeople error : " + err)); } 
                }> 6호선 월곡역 앞 </Text> 
            </View>
            
            <Text style={styles.modalText}> 도착지 </Text>
            <View style= {styles.modalAddress}>
              <Text style={styles.modalAddressText} 
                onPress={() => {
                  getData2({
                    latitude: 37.60691360000001,
                    longitude: 127.0386139,
                  });
                  fetch('https://maps.googleapis.com/maps/api/geocode/json?address=37.60691360000001,127.0386139'
                  + '&key=AIzaSyB_DOAebHbAvs_A3vcY7j5-emd-dqYGRu4' + '&language=ko')
                  .then((response) => response.json())
                  .then((responseJson) => {
                    console.log("자주 이용하는 목적지 주소: " + responseJson.results[0].formatted_address);
                    //Address 메인으로 넘겨주기
                    getAddress2(responseJson.results[0].formatted_address) })
                  .catch((err) => console.log("udonPeople error : " + err)); }
              }> 두산위브아파트 </Text>
            </View>
          </Pressable>

          <View style={{alignItems: 'center', width: '90%', flex: 0.5}}>
            <Pressable style={styles.modalBtn2} onPress={() => setModalOpen(false)}>
                <Text style={styles.modalClose}> 등록 </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  </TouchableOpacity>
  );
};

export default ModalView;