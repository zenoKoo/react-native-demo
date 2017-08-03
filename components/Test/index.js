import React, { Component } from 'react';
import { Navigator } from 'react-native-deprecated-custom-components';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    ViewPagerAndroid,
    View
} from 'react-native';

import HomeUI from './HomeUI'
import Button from './Button'
import LikeCount from './LikeCount'

const PAGES = 5;
const BGCOLOR = ['#fdc08e', '#fff6b9', '#99d1b7', '#dde5fe', '#f79273'];
const IMAGE_URIS=[
  'http://apod.nasa.gov/apod/image/1410/20141008tleBaldridge001h990.jpg',
  'http://apod.nasa.gov/apod/image/1409/volcanicpillar_vetter_960.jpg',
  'http://apod.nasa.gov/apod/image/1409/m27_snyder_960.jpg',
  'http://apod.nasa.gov/apod/image/1409/PupAmulti_rot0.jpg',
  'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png',
];

class ProgressBar extends Component{
    constructor(props) {
      super(props);
    }

    render() {
        let fractionalPosition = (this.props.progress.position+this.props.progress.offset);
        let progressBarSize = (fractionalPosition/(PAGES -1 ))*this.props.size;
        return (
            <View style={[styles.progressBarContainer, {width: this.props.size}]}>
                <View style={[styles.progressBar, {width: progressBarSize}]}/>
            </View>

        )
    }
}

class WelcomeUI extends Component{
    //引导页 或者 欢迎界面  用viewpager实现
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            animationsAreEnabled: true,
            progress: {
                position: 0,
                offset: 0
            }
        };
    }
    onPageSelected(e){
        //这个回调会在页面切换完成后（当用户在页面间滑动）调用
        //回调参数中的event.nativeEvent对象
        this.setState({
            page: e.nativeEvent.position
        })
    }
    onPageScroll(e){
    //当在页间切换时（不论是由于动画还是由于用户在页间滑动/拖拽）执行。
    //回调参数中的event.nativeEvent对象会包含如下数据：
    //position 从左数起第一个当前可见的页面的下标。
    //offset 一个在[0,1)（大于等于0，小于1）之间的范围，代表当前页面切换的状态。值x表示现在"position"所表示的页有(1 - x)的部分可见，而下一页有x的部分可见。
        this.setState({progress:e.nativeEvent})
    }
    move(delta){
        let page = this.state.page + delta;
        this.go(page);
    }
    go(page){
        if(this.state.animationsAreEnabled){
            this.viewPager.setPage(page);
        }else{
            this.viewPager.setPageWithoutAnimation(page);
        }
        this.setState({page})
    }
    onClick(){
        const { navigator } = this.props;
        if(navigator){
            navigator.push({
                name: 'HomeUI',
                component: HomeUI
            })
        }
    }

    render() {
        const thunbsUp='\uD83D\uDC4D';
        let pages=[];
        for(let i=0;i<PAGES;i++){
            let pageStyle = {
                backgroundColor: BGCOLOR[i%BGCOLOR.length],
                alignItems: 'center',
                padding: 20
            };
            if(i<PAGES-1){
                //前面几个viewpage
            //collapsable 如果一个View只用于布局它的子组件，
            //则它可能会为了优化而从原生布局树中移除。 
            //把此属性设为false可以禁用这个优化，以确保对应视图在原生结构中存在。
                pages.push(
                    <View key={i} style={pageStyle} collapsable={false}>
                        <Image style={styles.image} source={{uri: IMAGE_URIS[i%BGCOLOR.length]}}/>
                        <LikeCount />
                    </View>
                    )
            }else{
                //最后一个viewpage 加了一个按钮
                pages.push(
                    <View key={i} style={pageStyle} collapsable={false}>
                      <Image
                          style={styles.image}
                          source={{uri: IMAGE_URIS[i % BGCOLOR.length]}}
                          />
                      <LikeCount />
                      <TouchableOpacity onPress={this.onClick.bind(this)} style={styles.startupButton}>
                        <Text style={styles.likesText}>{thunbsUp+'启动首页'}</Text>
                      </TouchableOpacity>
                    </View>
                );
            }
        }
        let { page, animationsAreEnabled } = this.state;
        return (
            <View style={styles.container}>
                <ViewPagerAndroid 
                    style={styles.viewPager}
                    initialPage={0}
                    onPageScroll={this.onPageScroll.bind(this)}
                    onPageSelected={this.onPageSelected.bind(this)}
                    ref={viewPager => {this.viewPager = viewPager;}}>
                    {pages}
                </ViewPagerAndroid>
                <View style={styles.buttons}>
                    {
                        animationsAreEnabled?
                        <Button 
                            enabled={true}
                            text="turn off animation"
                            onPress={()=>this.setState({animationsAreEnabled:false})}/>
                            :
                        <Button 
                            enabled={true}
                            text="turn on animation"
                            onPress={()=>this.setState({animationsAreEnabled:true})}/>
                    }
                </View>
                <View style={styles.buttons}>
                    <Button text="Start" enabled={page > 0} onPress={() => this.go(0)}/>
                    <Button text="Prev" enabled={page > 0} onPress={() => this.move(-1)}/>
                    <Text style={styles.buttonText}>页：{page + 1} / {PAGES}</Text>
                    <ProgressBar size={100} progress={this.state.progress}/>
                    <Button text="Next" enabled={page < PAGES - 1} onPress={() => this.move(1)}/>
                    <Button text="Last" enabled={page < PAGES - 1} onPress={() => this.go(PAGES - 1)}/>
                </View>
            </View>
        )
    }
    componentDidMount() {
        this.go(PAGES - 1)
    }
}

export default class Test extends Component{
    render() {
        let defaultName = 'WelcomeUI';
        let defaultComponent = WelcomeUI;
        return (
            <Navigator 
                initialRoute={{name: defaultName, component: defaultComponent}}
                configureScene={(route) => {
                    return Navigator.SceneConfigs.FloatFromRight;
                }}
                renderScene={(route, navigator) => {
                    let Components = route.component;
                    return <Components {...route.params} navigator={navigator}/>
                }}
                />
        )
    }
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        height: 30,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    image: {
        width: 300,
        height: 200,
        padding: 20
    },
    startupButton: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderColor: '#333',
        borderWidth: 1,
        borderRadius: 5,
        margin: 8,
        padding: 8
    },
    progressBarContainer: {
        height: 10,
        margin: 10,
        borderColor: '#eee',
        borderWidth: 2
    },
    progressBar: {
        alignSelf: 'flex-start',
        flex: 1,
        backgroundColor: '#f00'
    },
    viewPager: {
        flex: 1
    },
    buttonText: {
        color: 'white',
    }
});