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


const styles=StyleSheet.create({
    bigblue:{
      color:'blue',
      fontWeight:'bold',
      fontSize:30,
    },
    red:{
      color:'red'
    }
})

class LotsOfStyles extends Component{
  render(){
    return(
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style= {[styles.bigblue,styles.red]}>bigblue,then red</Text>
        <Text style={[styles.red,styles.bigblue]}>red,then bigblue</Text>
      </View>
    )
  }
}

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

        <LotsOfStyles/>
        <FixedDimensionsBasics/>
        {/*<Blink text = 'I love Android'/>
        <Blink text = 'I love iOS'/>*/}
    </View>
    
  );
}
}

AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);


class FixedDimensionsBasics extends Component{
  render(){
    return (
      <View>
        <View style={{ width:50,height:50,backgroundColor:'powderblue'}}/>
        <View style={{ width:150,height:150,backgroundColor:'skyblue'}}/>
        </View>
    )
  }
}
// AppRegistry.registerComponent('HelloWorldApp',()=>FixedDimensionsBasics)