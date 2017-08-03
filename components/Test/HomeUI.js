import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
export default class HomeUI extends Component{
    constructor(props){
        super(props);
        this.state = {
            movies: null
        }
    }
    goBack(){
        const { navigator } = this.props;
        if(navigator){
            navigator.pop();
        }
    }
    render() {
        if (!this.state.movies) {
            //如果movies==null的情况 初始情况  渲染加载视图
            return this.renderLoadingView();
        }

        //从网络上获取了数据的情况
        var movie = this.state.movies[0];
        //alert(JSON.stringify(movie))
        return this.renderMovie(movie);
    }
    renderLoadingView(){
        return (
            <View style={styles.container}>
                <Text>正在网络上获取数据</Text>
            </View>
        )
    }
    renderMovie(movie){
        return (
            <View style={styles.container}>
                <Image 
                    source={{uri: movie.posters.thumbnail}}
                    style={styles.thumbnail}/>
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>标题：{movie.title}</Text>
                    <Text style={styles.year}>{movie.year}年</Text>
                </View>
            </View>
        )
    }
    componentDidMount() {
        this.fetchData()
    }
    fetchData(){
        fetch(REQUEST_URL)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    movies: res.movies
                })
            })
            .catch(res => {
                alert(res)
            })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    thumbnail: {
        width: 53,
        height: 81,

    },
    //让rightContainer在父容器中占据Image之外剩下的全部空间。

    rightContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    year: {
        textAlign: 'center',
    },



});

