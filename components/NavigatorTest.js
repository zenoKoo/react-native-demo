import React, { Component } from 'react';
//import Navigator from 'react-native-deprecated-custom-components';
import {
  AppRegistry,
  StyleSheet,
  Text,Navigator,
  View,
  ScrollView,
  PixelRatio
} from 'react-native';
export default class NavigatorTest extends Component{
    render() {
        let defaultName = 'list';
        let defaultComponent = List;
        return (
            <Navigator
                initialRoute={{name:defaultName,component:defaultComponent}}
                configureScene={(route) => {
                //这个是页面之间跳转时候的动画，具体有哪些？可以看这个目录下，有源代码的: node_modules/react-native/Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js   
                    return Navigator.SceneConfigs.VerticalDownSwipeJump;
                }} 
                renderScene={(route, navigator) => {
                    let Components = route.component;
                    return <Components {...route.params}
                        navigator={navigator}/>
                }}/>
        )
    }
}
class List extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    _pressButton(){
        const { navigator } = this.props;
        if(navigator){
            navigator.push({
                name: 'Detail',
                component: Detail
            })
        }
    }
    render() {
        return (
            <ScrollView style={styles.flex}>
                <Text style={styles.lsit_item}
                    onPress={this._pressButton.bind(this)}>
                    豪华邮轮济州岛3日游
                </Text>
                <Text style={styles.lsit_item}
                    onPress={this._pressButton.bind(this)}>
                    豪华邮轮台湾3日游
                </Text>
                <Text style={styles.lsit_item}
                    onPress={this._pressButton.bind(this)}>
                    豪华邮轮地中海8日游
                </Text>
            </ScrollView>
        )
    }
}
class Detail extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    _pressButton(){
        const { navigator } = this.props;
        if(navigator){
            navigator.pop();
        }
    }
    render() {
        return (
            <ScrollView>
                <Text style={styles.list_item}
                    onPress={this._pressButton.bind(this)}>
                    点击我可以跳回去
                </Text>
            </ScrollView>   
        )
    }
}
const styles = StyleSheet.create({

  flex:{
    flex:1,

  },
    list_item:{
        height:40,
        marginLeft:10,
        marginRight:10,
        fontSize:20,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
        justifyContent:'center',
    },



});