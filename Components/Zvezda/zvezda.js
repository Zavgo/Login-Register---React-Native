import React, { Component } from 'react';
import { View,Animated, Easing } from 'react-native';

export default class Zvezda extends Component {
  constructor(props) {
    super(props);
    this.state = { spinAnim: new Animated.Value(0) }
  }

 componentDidMount(){
 Animated.loop(Animated.timing(
    this.state.spinAnim,
  {
    toValue: 1,
    duration: 6000,
    easing: Easing.linear,
    useNativeDriver: true
  }
)).start();
 }

  render() {
    const spin = this.state.spinAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });
    return (
      <View>
        <Animated.Image
        style={{height:110, width: 100,transform: [{rotate: spin}] }}
        source={require('../../img/zvezda.png')} />
      </View>
    );
  }
}
