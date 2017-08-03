
import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
    WebView
    } from 'react-native'
import Dimensions from 'Dimensions'

const { width, height } = Dimensions.get('window')

export default class WebViewTest extends Component{
    render() {
        return (
            <View style={styles.flex}>
                <WebView 
                    style={{height, width}}
                    source={{uri: 'https://m.baidu.com'}}
                    injectedJavaScript={'alert("I am Zeno")'}
                />
            </View>   
        )
    }
}

const styles = StyleSheet.create({

    flex:{
        flex:1,
    },

});