'use strict';

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    ViewPagerAndroid,
    View
    } from 'react-native';

export default class ViewPagerTest extends Component{
    render() {
        return (
            <ViewPagerAndroid
                initialPage={0}
                style={[styles.flex, styles.viewpager]}>
                <View style={[styles.center, {backgroundColor: 'yellow'}]}><Text style={[{fontSize:12},{color:'red'}]}>第一个页面</Text></View>
                <View style={[styles.center, {backgroundColor: 'red'}]}><Text style={{fontSize:20}}>第二个页面</Text></View>
                <View style={[styles.center, {backgroundColor: 'blue'}]}><Text style={{fontSize:30}}>第三个页面</Text></View>
            </ViewPagerAndroid>   
        )
    }
}



const styles = StyleSheet.create({
    flex:{
        flexDirection:'column',
    },
    viewpager:{
        height:200
    },
    center:{
        justifyContent:'center',
        alignItems:'center'
    }
});