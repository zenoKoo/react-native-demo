import React, { Component } from 'react'
import { Text, View, StyleSheet, PixelRatio } from 'react-native'

export default class TextTestHeader extends Component{
    render() {
        return (
            <View style={styles.flex}>
                <Text style={styles.font}>
                    <Text style={styles.font_1}>网易</Text>
                    <Text style={styles.font_2}>新闻</Text>
                    <Text style={styles.font_3}>有态度</Text>
                </Text>
            </View>   
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        marginTop: 25,
        height: 50,
        borderBottomWidth: 3/PixelRatio.get(),
        alignItems: 'center'
    },
    font:{
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center',
    },
    font_1:{
        color:'#CD1D1C',
    },
    font_2:{
        color:'#FFF',
        backgroundColor:'#CD1D1C',
    },
})