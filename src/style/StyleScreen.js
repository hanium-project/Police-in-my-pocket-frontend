import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    //--------------------AddressScreen.js
    container: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6799FF'
    },
    header: {
        width: '100%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content1: {
        width: '100%',
        height: '10%',
        flexDirection: 'row',
    },
    content: {
        width: '100%',
        height:'65%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer: {
        width: '100%',
        height: '15%',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        alignSelf: 'flex-start',
        fontSize: 25,
        color: '#ffffff',
        marginTop: -20,
        marginBottom: 15,
        fontFamily: 'GmarketSansTTFMedium',
        flexDirection: 'row',
        marginLeft: 5,
    },
    block: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginBottom: 10
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 15,
        width: '80%',
        fontFamily: 'GmarketSansTTFMedium',
    },
    text: {
          fontSize: 18,
          color: '#FFFFFF',
          fontFamily: 'GmarketSansTTFMedium',
          alignSelf: 'flex-start',
          marginLeft: 40,
    },
    img: {
      width: 30,
      height: 30,
      alignSelf: 'flex-end',
    },
    barContent: {
        width: '99%',
        height: '20%',
        marginLeft: 23,
      },

    //--------------------EditInfoScreen.js && EditPWScreen.js
    editHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    editInput: {
        width: '90%',
        height: 45,
        padding: 10,
        margin: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 27,
        fontSize: 18,
        fontFamily: 'GmarketSansTTFMedium',
        fontStyle: 'normal',
        flexDirection: 'row'
    },
    editContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#709eff',
        fontFamily: 'GmarketSansTTFMedium',
    },
    editRadioForm: {
        marginLeft: 15
    },
    editTextInput: {
        margin: 10,
        borderRadius: 20,
        backgroundColor: '#bdd2ff',
        fontFamily: 'GmarketSansTTFMedium',
        color: 'white',
        flexWrap: 'wrap',
        width: '90%',
    },
    editTitleText: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'GmarketSansTTFMedium',
      },
    editText: {
        fontSize: 15,
        fontFamily: 'GmarketSansTTFMedium',
        color: '#709eff',
        fontStyle: 'normal',
        alignItems: 'center',
    },
    editSubmitButton: {
        backgroundColor: '#043BFF',
        borderRadius: 20,
        padding: 10,
        width: '90%',
        height: 45,
        alignItems: 'center',
        fontFamily: 'GmarketSansTTFMedium',
    },
    editSubmitButtonText: {
        color: 'white',
    },

    //--------------------LoginScreen.js
    loginImageBackground: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginTextInput: {
        width: '80%',
          height: '7%',
          padding: 10,
          marginTop: '90%',
          backgroundColor: '#FFFFFF',
          borderRadius: 27,
          fontSize: 18,
          fontFamily: 'GmarketSansTTFMedium',
          fontStyle: 'normal'
    },
    loginInput: {
        width: '80%',
        height: '7%',
        padding: 10,
        margin: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 27,
        fontSize: 18,
        fontFamily: 'GmarketSansTTFMedium',
        fontStyle: 'normal'
    },
    loginText: {
        fontFamily: 'GmarketSansTTFMedium',
        color: '#FFFFFF',
        fontSize: 15,
        textDecorationLine: 'underline' 
    },
    loginButton: {
        width: '80%',
        height: '7%',
        paddingTop: 12,
        marginBottom: 5,
        backgroundColor: '#5982da',
        borderRadius: 27,
        fontFamily: 'GmarketSansTTFMedium',
        fontStyle: 'normal',
        alignItems: 'center',
    },
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#709eff',
    }, 
    //--------------------FindIdScreen.js
    numHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      },
      numStyle: {
        width: '56%',
        height: '57%',
        padding: '2.5%',
        marginTop: '5%',
        backgroundColor: '#FFFFFF',
        borderRadius: 27,
        fontSize: 16,
        fontFamily: 'GmarketSansTTFMedium',
        fontStyle: 'normal',
        flexDirection: 'row'
      },
      numButton: {
        width: "120%",
        height: 40,
        backgroundColor: '#FFFFFF',
        borderRadius: 27,
        fontSize: 18,
        marginTop: 20,
        marginRight: '1%',
        fontFamily: 'GmarketSansTTFMedium',
        fontStyle: 'normal',
        alignItems: 'center',
        paddingTop: 16
      },
      numInput: {
        width: '75%',
        height: '6%',
        padding: '2.5%',
        margin: '2%',
        backgroundColor: '#FFFFFF',
        borderRadius: 27,
        fontSize: 16,
        marginLeft:'7%',
        fontFamily: 'GmarketSansTTFMedium',
        fontStyle: 'normal',
      },
      numText: {
        fontSize: 13,
        fontFamily: 'GmarketSansTTFMedium',
        color: '#709eff',
        fontStyle: 'normal',
        alignItems: 'center',
      },
    //--------------------FindPwScreen.js
      idText: {
        width: '58%',
        height: '65%',
        padding: '2.5%',
        marginTop: '5%',
        backgroundColor: '#FFFFFF',
        borderRadius: 27,
        fontSize: 18,
        fontFamily: 'GmarketSansTTFMedium',
        fontStyle: 'normal',
        flexDirection: 'row',
      },
      idInput: {
        width: '58%',
        height: '65%',
        padding: '2.5%',
        marginTop: '5%',
        backgroundColor: '#FFFFFF',
        borderRadius: 27,
        fontSize: 18,
        fontFamily: 'GmarketSansTTFMedium',
        fontStyle: 'normal',
        flexDirection: 'row',
      }, 
      idButton: {
        width: "130%",
        height: 50,
        backgroundColor: '#FFFFFF',
        borderRadius: 27,
        fontSize: 18,
        marginTop: 25,
        fontFamily: 'GmarketSansTTFMedium',
        fontStyle: 'normal',
        alignItems: 'center',
        paddingTop: 10,
        paddingLeft: 10,
      },
      idText: {
        fontSize: 15,
        fontFamily: 'GmarketSansTTFMedium',
        color: '#709eff',
        fontStyle: 'normal',
        alignItems: 'center',
      },
    //--------------------FindPwScreen.js
      findPwText: {
        fontFamily: 'GmarketSansTTFMedium',
        color: '#FFFFFF',
        fontSize: 18,
        marginTop: 20,
      },
    //--------------------LocationInformScreen.js 
      informText: {
        fontFamily:'GmarketSansTTFMedium',
        color: 'white',
        fontSize: 20,
        marginLeft: 10,
      },
      informText1: {
        fontFamily:'GmarketSansTTFMedium',
        color: 'white',
        marginTop: '4%',
        fontSize: 13,
        marginLeft: '55%'
      },
      informText2: {
        fontFamily:'GmarketSansTTFMedium',
        color: 'white',
        marginTop: '1%',
        fontSize: 10,
      },
      informImg: {
        width: '5%',
        height: '55%',
        marginTop: '4%',
        marginLeft: -15
      },
      informTitle: {
        color: 'white',
        marginLeft: '5%',
        fontSize: 17,
        fontFamily: 'GmarketSansTTFMedium',
      },
      informView: {
        padding: 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: 'white',
        width: '95%',
        marginLeft: '2.7%'
      },
    //--------------------MainScreen.js
      mainContainer: {
        flex: 1,
        padding: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6799FF',
      },
      mainHeader: {
        width: '100%',
        height: '5%',
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',
      },
      mainMap: {
        width: '100%',
        height: '100%',
      },
      mainContent1: {
        width: '100%',
        height: '20%',
      },
      mainContent: {
        width: '90%',
        height: '55%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 4
      },
      mainFooter: {
        width: '100%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      mainTitle: {
        alignSelf: 'flex-start',
        fontSize: 16,
        color: '#ffffff',
        marginBottom: 3,
        fontFamily: 'GmarketSansTTFMedium',
      },
      mainBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginLeft: 20,
      },
      //--------------------MenuScreen.js
      menuBtn: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: '3%',
        margin: '2%',
        flexDirection: 'row',
        borderRadius: 10,
        width: '95%',
        marginLeft: '2.7%',
      },
      //--------------------MyPageScreen.js
      myPageButton: {
        marginTop: 10,
        width: 356,
        height: 45,
        paddingTop: 12,
        backgroundColor: '#6799FF',
        borderWidth: 0.5,
        borderTopColor: '#FFFFFF',
        borderBottomColor: '#FFFFFF',
        borderLeftColor: '#6799FF',
        borderRightColor: '#6799FF',
        fontSize: 18,
        paddingLeft:12,
        marginLeft: 2,
        fontFamily: 'GmarketSansTTFMedium',
        fontStyle: 'normal',
      },
      myPageText: {
        fontSize: 18,
        fontFamily: 'GmarketSansTTFMedium',
        color: '#FFFFFF',
      },
      myPageContainer: {
        flex: 1,
        backgroundColor: '#6799FF',
        fontFamily: 'GmarketSansTTFMedium',
      }
});