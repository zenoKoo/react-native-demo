import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PixelRatio
} from 'react-native';

//import TextTest from './components/TextTest'
import NavigatorTest from './components/NavigatorTest'
export default class demo extends Component{
    render() {
        return (
            <NavigatorTest /> 
        )
    }
}


AppRegistry.registerComponent('demo', () => demo);
