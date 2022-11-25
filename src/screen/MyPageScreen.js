import React from 'react';
import {
  TouchableHighlight,
  View,
  Text,
  Dimensions
} from 'react-native';
import {styles} from '../style/StyleScreen';

var {width} = Dimensions.get('window');

const Mypage = ({navigation}) => {

  return (
    <View style={styles.myPageContainer}>
      <View style={{flexDirection: 'row', alignSelf: 'flex-start', width: '100%',
              height: 20,
              marginLeft: 10,
              marginTop: 15,
              }}>
        <Text style={[styles.mainTitle, {fontSize: 20}]} onPress={() => navigation.pop()}> ＜ </Text>
        <Text style = {{fontSize: 18, fontFamily: 'GmarketSansTTFMedium',color: '#FFFFFF'}}> 마이페이지 </Text>
      </View>
      
      <TouchableHighlight>
        <View style={{marginTop: 20, width: 356, height: 45, paddingTop: 12, backgroundColor: '#6799FF', borderWidth: 0.5, borderTopColor: '#FFFFFF',
        borderBottomColor: '#FFFFFF', borderLeftColor: '#6799FF', borderRightColor: '#6799FF', fontSize: 18, paddingLeft:12, marginLeft: 2,
        fontFamily: 'GmarketSansTTFMedium', fontStyle: 'normal',}}>
          <Text style={styles.myPageText} onPress={() => navigation.navigate('EditInfo')}>
            회원 정보 수정
          </Text>
        </View>
      </TouchableHighlight>
      
      <TouchableHighlight>
        <View style={styles.myPageButton}>
          <Text style={styles.myPageText} onPress={() => navigation.navigate('EditPw')}>
            비밀번호 변경
          </Text>
        </View>
      </TouchableHighlight>
    
    </View>
  );
};

export default Mypage;