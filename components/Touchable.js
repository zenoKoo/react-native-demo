'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
    } from 'react-native';


let onePT = 1 / PixelRatio.get();

export default class Touchable extends Component{
    show(text){
        alert(text)
    }
    render() {
        return (
            <View style={styles.flex}>
                <TouchableHighlight
                    onPress={this.show.bind(this, '欢迎学习react native技术')} underlayColor="#e1f6ff">
                    <Text>欢迎学习react技术-TouchableHighlight</Text>
                </TouchableHighlight>
                <TouchableOpacity 
                    onPress={this.show.bind(this, '作者ZenoKoo')}>
                    <Text style={styles.item}>作者ZenoKoo</Text>
                </TouchableOpacity>
                <TouchableWithoutFeedback
                    onPress={this.show.bind(this, '作者ZenoKoo')}>
                    <View>
                        <Text style={styles.item}>作者ZenoKoo</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>   
        )
    }
}

const styles = StyleSheet.create({

  flex:{
    flex:1,
    marginTop:25,
  },

 item:{
   fontSize:18,
   color:'#434343',
   marginLeft:5,
   marginTop:10,
 },

});

