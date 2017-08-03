'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    PixelRatio,
    Text,
    Image,
    TouchableOpacity,
    View,
    Picker,
    ProgressBarAndroid
} from 'react-native';

let imgs=[
    {uri: 'https://www.baidu.com/img/bd_logo1.png'},
    {uri: 'https://gss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/img/xiaoman2016_24.png'},
    require('../images/968006_20170803134500.png'),
];

export default class ImageTest extends Component{
    constructor(props) {
        super(props);
        this.state = {
            languange: null
        }
    }
    render() {
        let { Item } = Picker;
        return (
            <View style={[styles.flex, {marginTop: 45}]}>
                <ProgressBarAndroid styleAttr="LargeInverse"/>
                <Text>Picker组件</Text>
                <Picker
                    selectedValue={this.state.languange}
                    onValueChange={lang => {this.setState({languange: lang})}}
                    mode="dialog"
                    style={{color: '#f00'}}>
                    <Item label="Java" value="java"/>
                    <Item label="Javascript" value="Javascript"/>
                    <Item label="Php" value="Php"/>
                    <Item label="Pathon" value="Pathon"/>
                    <Item label="Nodejs" value="Nodejs"/>
                    <Item label=".Net" value=".Net"/>
                </Picker>
                <MyImage imgs={imgs}/>
            </View>   
        )
    }
}
class MyImage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            imgs: this.props.imgs
        }
    }

    goPreview(){
        let count = this.state.count;
        let num = --count>=0?count:this.state.imgs.length-1;
        this.setState({
            count: num
        })
    }
    goNext(){
        let count = this.state.count;
        let num = ++count<this.state.imgs.length?count:0;
        this.setState({
            count:num
        })
    }
    //source={{uri:this.state.imgs[this.state.count]}}  网络图片

    //source={require('./xiaoman2016_24.png')}   本地图片
    render() {
        //alert(`imgs length is ${imgs.length}, now is ${this.state.count}`)
        return (
            <View style={[styles.flex,{alignItems: 'center'}]}>
                <View style={styles.image}>
                    <Image style={styles.img}
                        resizeMode="contain"
                        source={this.state.imgs[this.state.count]}/>
                </View>
                <View style={styles.btns}>
                    <TouchableOpacity onPress={this.goPreview.bind(this)}>
                        <View style={styles.btn}>
                            <Text>上一页</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.goNext.bind(this)}>
                        <View style={styles.btn}>
                            <Text>下一页</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
             
        )
    }
}

const styles = StyleSheet.create({

    btn:{
        width:60,
        height:30,
        borderColor:'#0089FF',
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:3,
        marginRight:20

    },

    btns:{
        flexDirection:'row',
        marginTop:20,
        justifyContent:'center'
    },


    img:{
        height:150,
        width:200
    },
    image:{
      borderWidth:1,
        width:300,
        height:200,
        borderRadius:5,
        borderColor:'#ccc',
        justifyContent:'center',
        alignItems:'center'
    },
  flex:{
    flex:1
  }
});