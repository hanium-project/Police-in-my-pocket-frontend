import React, { useState } from "react";
import {Text, Pressable, Modal, View, Image} from 'react-native';
import {styles} from '../style/componentStyle';

const MyButton = () => {
  const [modalOpen, setModalOpen] = useState(false);

    return (
      <Pressable style={styles.myButton}
        onPress={() => {setModalOpen(true)}} >
        <Text style={styles.myButtonText}> START </Text>
        <Modal visible={modalOpen}
          animationType={"fade"}
          transparent={true}
          style={styles.modalBox}
          onRequestClose={() => { //backbutton으로 modal을 닫는 기능
          setModalOpen(false);
          }}>
          <View style={styles.modalBox}>
            <View style={styles.modalContent}>
              <View style={{flexDirection: 'row', width: 300}}>
                <Pressable style={styles.myButtonBtn} onPress={() => setModalOpen(false)}>
                  <Text style={styles.modalText}> 닫기 </Text>
                </Pressable>
              </View>
              <View style={{height: 300, width: 300, alignItems: 'center'}}>
                <Text style={{fontSize: 20, marginTop: 10, fontFamily: 'GmarketSansTTFMedium'}}> 백그라운드 앱이 실행중입니다 </Text>
                <Image
                    source={require('../../assets/imgs/loading.png')}
                    style={{
                      width: 60,
                      height: 60,
                      marginTop: 10,
                    }}
                />
              </View>
            </View>
          </View>
        </Modal>
      </Pressable>
    )
}

export default MyButton;