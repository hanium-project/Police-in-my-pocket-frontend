import React, {useState} from 'react';
import {Text, View, Pressable, Modal, TextInput} from 'react-native';
import {styles} from '../style/componentStyle';
import MyButton from './MyButton';

const ReportModal = ({navigation, modalFunction}) => {
  const [modalOpen, setModalOpen] = useState(true);

  modalFunction(modalOpen);

  return (
    <View>
      <Modal visible={modalOpen}
        animationType={"fade"}
        transparent={true}
        style={styles.modalBox}
        onRequestClose={() => { //backbutton으로 modal을 닫는 기능
        setModalOpen(false); }}>

        <View style={styles.modalBox}>
          <View style={styles.modalContent}>
            <View style={{flexDirection: 'row', width: '90%', flex: 0.5}}>
              <Text style={styles.title}> 신고하기 </Text>
              <Pressable style={[styles.modalBtn2, {marginTop: '5%'}, {marginLeft: '55%'}]} 
                onPress={() => setModalOpen(false)}>
                <Text style={[styles.modalText, {marginTop: 3}]}> 닫기 </Text>
              </Pressable>
            </View>

            <Pressable style={styles.modalAddressBox}>
              <Text style={[styles.modalText, {marginTop: 3}]}>
                  {"\n\n"}
                  등록한 연락처 중 무작위로 {"\n"}
                  신고 문자가 전송되었습니다. {"\n"}
                  인근 경찰서에도 신고 문자를 전송합니다. {"\n"}
                  {"\n"}
                  이 팝업 메세지는 10초 후 사라집니다. {"\n"}
                  1분 이내로 비밀번호 인증 시 {"\n"}
                  신고 및 사이렌이 해제됩니다. {"\n"}
              </Text>
              <TextInput style={styles.reportModalInput}
                  secureTextEntry={true}
                  placeholder='보안코드'
                  keyboardType="numeric" />
            </Pressable>

            <View style={{alignItems: 'center', width: '90%', flex: 0.5}}>
              <MyButton/>
            </View>
          </View>
        </View>
        
      </Modal>
    </View>
  );
};

export default ReportModal;