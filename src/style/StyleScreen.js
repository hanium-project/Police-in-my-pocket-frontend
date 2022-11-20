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
    }
});