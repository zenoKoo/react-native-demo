import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View
    } from 'react-native';

export default class Button extends Component{
    constructor(props) {
        super(props);
    }
    _handlePress(){
        if(this.props.enabled && this.props.onPress){
            this.props.onPress();
        }
    }
    render() {
        return (
            <TouchableWithoutFeedback 
                onPress={this._handlePress.bind(this)}>
                <View style={[styles.button, this.props.enabled?{}:styles.buttonDisabled]}>
                    <Text style={styles.buttonText}>{this.props.text}</Text>
                </View>
            </TouchableWithoutFeedback>   
        )
    }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    width: 0,
    margin: 2,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'gray'
  },
  buttonDisabled: {
    backgroundColor: 'black',
    opacity: 0.5
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center'
  }
});