/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

class Greeting extends Component{
  render(){
    return (
        <Text> Hello {this.props.n}! </Text>
    );
  }  
}

class HelloWorldApp extends Component{
render(){
  let pic = {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
  }
  return (
    <View style={{ alignItems: 'center'}}>
        <Greeting n = 'RxJava'/>
        <Greeting n = 'Android'/>
        <Greeting n = 'iOS'/>
        <Image source={pic} style={{width:193,height:110}}/>
    </View>
    
  );
}
}

AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
