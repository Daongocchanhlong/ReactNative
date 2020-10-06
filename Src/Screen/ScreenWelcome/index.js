import React, { Component } from 'react'
import {Text, Animated, View,TouchableHighlight} from 'react-native';

import styles from './style'

import logo from '../../Asset/Image/logo.png'
import * as ScreenNames from '../../Define/ScreenName';

export default class ScreenWelcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.time, {
      toValue: 2,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }

  render() {
    const opacity = this.state.time.interpolate({
      inputRange: [0, 1,2],
      outputRange: [0, 1,1],
    });
    const scale = this.state.time.interpolate({
      inputRange: [0, 0.5,1.5,2],
      outputRange: [0, 0,1,1],
    });
    const opacity1 = this.state.time.interpolate({
      inputRange: [0, 1.5, 2],
      outputRange: [0, 0, 1],
    });
    const opacity2 = this.state.time.interpolate({
      inputRange: [0, 1.7, 2],
      outputRange: [0, 0, 1],
    });
    const opacity3 = this.state.time.interpolate({
      inputRange: [0, 1.8, 2],
      outputRange: [0, 0, 1],
    });
    return (
      <Animated.View style={[styles.contain, {opacity}]}>
        <Animated.Image
          source={logo}
          style={[{transform: [{scale}]}, styles.logo]}
        />
        <View style={styles.containOptionMenu}>
          <Animated.View
            style={[styles.containOptionItem, {opacity: opacity1}]}>
            <TouchableHighlight
              onPress={() =>
                this.props.navigation.navigate(ScreenNames.LIST_SCREEN)
              }>
              <Text style={styles.textItem}>Danh sách</Text>
            </TouchableHighlight>
          </Animated.View>
          <Animated.View
            style={[styles.containOptionItem, {opacity: opacity2}]}>
            <TouchableHighlight>
              <Text style={styles.textItem}>Thống kê</Text>
            </TouchableHighlight>
          </Animated.View>
          <Animated.View
            style={[styles.containOptionItem, {opacity: opacity3}]}>
            <TouchableHighlight>
              <Text style={styles.textItem}>Điểm danh & Đóng quỹ</Text>
            </TouchableHighlight>
          </Animated.View>
        </View>
      </Animated.View>
    );
  }
}