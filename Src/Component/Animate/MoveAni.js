import React, {Component} from 'react';
import {Animated, Easing} from 'react-native';

export default class FadeAni extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Animated.Value(0),
    };
  }
  componentDidMount() {
    Animated.timing(this.state.time, {
      toValue: 1,
      useNativeDriver: true,
      duration: 1000,
    }).start();
  }

  render() {
    const translateY = this.state.time.interpolate({
      inputRange: [0,1],
      outputRange: [100,0],
    });
    return (
      <Animated.View
        style={{
          ...this.props.style,  
          transform: [{translateY}],
        }}>
        {this.props.children}
      </Animated.View>
    );
  }
}
