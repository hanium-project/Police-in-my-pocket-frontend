import React, { useEffect, useRef } from 'react';
import {
    Pressable,
    StyleSheet,
    TextInput,
    useWindowDimensions,
    View
} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

function SearchBar1() {
    return (
        <View style={[styles.block, {width: '42%'}, {height: '70%'}, {marginEnd:'6%'}]}>
            <GooglePlacesAutocomplete
                placeholder='출발지를 입력하세요'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                }}
                query={{
                    key: 'AIzaSyDdba0lnMZrMDxRiWpBsZXdT_H_VTrdWMI',
                    language: 'en',
                }}
            />  
        </View>
    );
}

const styles = StyleSheet.create({
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
    button: {
        //marginRight: 8,
    },
});

export default  SearchBar1;