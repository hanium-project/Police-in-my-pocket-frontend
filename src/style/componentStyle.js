import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    //--------------------SearchBar.js
    clearImg: {
        width: 24,
        height: 24,
        marginTop: 10,
        marginLeft: 3,
    },
    block: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginLeft: 20,
        paddingBottom: 20
      },
    input: {
        backgroundColor: 'white',
        borderRadius: 15,
        width: '80%',
        fontFamily: 'GmarketSansTTFMedium',
    },

    //--------------------ModalView.js
    modal: {
      alignSelf: 'flex-end',
      fontSize: 11,
      color: '#ffffff',
      marginTop: 14,
      fontFamily: 'GmarketSansTTFMedium',
      borderBottomColor: 'white',
      borderBottomWidth: 1
    },
    modalBtn: {
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
    modalBtn2: {
      alignItems: 'center',
      backgroundColor: '#043BFF',
      padding: 10,
      borderRadius:27,
      width: 75,
      height: 40,
    }, 
    modalClose: {
      fontSize: 15,
      color: '#FFFFFF',
      marginLeft: 11,
      marginRight: 11,
      marginTop: 3,
      marginBottom: 3,
      fontFamily: 'GmarketSansTTFMedium'
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
        fontWeight: 'bold',
        fontSize: 18,
        color: '#043BFF',
        marginTop: 20,
        fontFamily: 'GmarketSansTTFMedium'
      },
    modalContent: {
        width: '90%',
        height: '60%',
        alignItems: 'center',
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#FFFFFF'
      },
    modalAddressBox: {
        width: '90%',
        height: '55%',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#6799FF',
        marginBottom: 20,
      },
    modalAddress: {
        width: '80%',
        height: '25%',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 5,
      },
    modalText: {
        fontSize: 15,
        color: '#FFFFFF',
        marginLeft: 11,
        marginRight: 11,
        marginTop: 10,
        marginBottom: 3,
        fontFamily: 'GmarketSansTTFMedium'
      },  
    modalAddressText: {
      fontSize: 15,
      color: '#043BFF',
      marginLeft: 11,
      marginRight: 11,
      marginTop: 10,
      marginBottom: 3,
      textDecorationLine: 'underline',
      fontFamily: 'GmarketSansTTFMedium'
    },

    //--------------------MyButton.js & Button_address.js
    myButton: {
        alignItems: 'center',
        backgroundColor: '#043BFF',
        padding: 10,
        borderRadius:15
    },
    myButtonText: {
      fontSize: 25,
      color: '#FFFFFF',
      marginLeft: 11,
      marginRight: 11,
      marginTop: 3,
      marginBottom: 3,
      fontFamily: 'GmarketSansTTFMedium',
    },
    myButtonBtn: {
      alignItems: 'center',
      backgroundColor: '#043BFF',
      padding: 10,
      borderRadius:27,
      width: 75,
      height: 40,
      marginTop: 10,
      marginBottom: 8,
      marginLeft: 225
    },
    modalText: {
        fontSize: 15,
        color: '#FFFFFF',
        marginTop: 3,
        fontFamily: 'GmarketSansTTFMedium'
    },  
    
    //--------------------ReportModal.js
    reportModalInput: { 
        width: '50%',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius:27
    },

    //--------------------Toggle.js
    toggleContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:'2%',
        marginLeft:'2%'
    },
    toggleText:{
       marginLeft:'1%',
       marginTop:'5%',
       color: "white",
       fontSize: 12
    },
  });