import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PixelRatio
} from 'react-native';

//import TextTest from './components/TextTest'
//import NavigatorTest from './components/NavigatorTest'
//import TextInputTest from './components/TextInputTest'
//import Touchable from './components/Touchable'
//import ImageTest from './components/ImageTest'
//import DrawerLayoutTest from './components/DrawerLayoutTest'
//import Test from './components/Test/index'
//import ViewPagerTest from './components/ViewPagerTest'
//import SwiperTest from './components/SwiperTest'
//import WebViewTest from './components/WebViewTest'
import ListViewTest from './components/ListViewTest'
export default class demo extends Component{
    render() {
        return (
            //<NavigatorTest /> 
            //<TextInputTest />
            //<Touchable />
            //<ImageTest />
            //<DrawerLayoutTest />
            //<Test />
            //<ViewPagerTest />
            //<SwiperTest />
            //<WebViewTest />
            <ListViewTest />
        )
    }
}


AppRegistry.registerComponent('demo', () => demo);
