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

class Blink extends Component{
  constructor(props){
    super(props);
    this.state={showText:true};

    setInterval(
      ()=>{
        this.setState(previousState=>{
          return { showText:!previousState.showText}
        });
      },100
    );
  }

  render(){
    let display = this.state.showText ?this.props.text:' ';
    return (
      <Text>{display}</Text>
    )
  }
}

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

        <Blink text = 'I love Android'/>
        <Blink text = 'I love iOS'/>
    </View>
    
  );
}
}

AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
