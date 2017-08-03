import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    ScrollView,
    Image,
    ListView,
    TouchableHighlight,
    RecyclerViewBackedScrollView,
    View,
    } from 'react-native';
const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json'
export default class ListViewTest extends Component{
    constructor(props){
        super(props)
        this.state = {
            loaded: false,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1,row2) => row1 !== row2
            })
        }
    }
    render(){
        if (!this.state.loaded) {
            //如果movies==null的情况 初始情况  渲染加载视图
            return this.renderLoadingView();
        }

        //从网络上获取了数据的情况
        //var movie = this.state.movies[0];
        //return this.renderMovie(movie);

        return(
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderMovie}
                contentContainerStyle={styles.list}
                style={styles.listView}
                />
        );
    }
    _pressText(){
        alert('点击来')
    }
    renderMovie(movie) {
        return (
            <View style={styles.container}>
                <Image
                    source={{uri: movie.posters.thumbnail}}
                    style={styles.thumbnail}
                    />
                <Text style={styles.year} onPress={this._pressText}>年份{movie.year}</Text>
            </View>
        );
    }
    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    正在网络上获取电影数据……
                </Text>
            </View>
        );
    }
    componentDidMount() {
        this.fetchData()
    }
    fetchData(){
        fetch(REQUEST_URL)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(res.movies),
                    loaded: true
                })
            })
            .done()
    }
}

const styles = StyleSheet.create({
    list: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    container: {
        width: 100,
        height: 100,
        backgroundColor: '#F5FCFF',
        margin: 5,
        alignItems: 'center'
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF'
    },
    thumbnail: {
        width: 80,
        height: 80,
        borderRadius: 16
    },
    //让rightContainer在父容器中占据Image之外剩下的全部空间。

    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 14,
        marginBottom: 8
    },
    year: {
        fontSize: 14
    }
});