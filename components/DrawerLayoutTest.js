   
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    Text,
    Image,
    TouchableOpacity,
    DrawerLayoutAndroid,
    ProgressBarAndroid,
    View
} from 'react-native'; 

export default class DrawerLayoutTest extends Component{
    render() {
        let navigatorView = (
            <View style={{flex: 1, backgroundColor: '#ff0'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>我是抽屉</Text>
            </View>
            )
        return (
            <DrawerLayoutAndroid 
                drawerWidth={100}
                drawerPosition={DrawerLayoutAndroid.positions.Right}
                renderNavigationView={()=> navigatorView}>
                <View style={{flex:1, alignItems: 'center'}}>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>React Native World!</Text>
                </View>
            </DrawerLayoutAndroid>
        )
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1
    }
});