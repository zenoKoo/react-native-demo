

import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
    } from 'react-native'

import Swiper from 'react-native-swiper'

export default class SwiperTest extends Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Swiper style={styles.wrapper} 
                showsButtons={true}
                showsPagination={true}>
                <View style={styles.slide1}>
                    <Image style={{width: 200, height: 300}}
                        resizeMode='stretch'
                        source={{uri:'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'}}
                        />
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                </View>
            </Swiper>   
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});
