import React, { Component } from 'react'
import {View, Text, Animated, TouchableHighlight,Alert} from 'react-native';
import styles from './style';

export default class ScreenHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time1: new Animated.Value(0),
      time2: new Animated.Value(0),
      time3: new Animated.Value(0),
    };
  }

  componentDidMount(){
    const ani1 = Animated.timing(this.state.time1, {
      toValue: 1,
      useNativeDriver: true,
      duration: 500,
    });
    const ani2 = Animated.timing(this.state.time2, {
      toValue: 1,
      useNativeDriver: true,
      duration: 500,
    });
    const ani3 = Animated.timing(this.state.time3, {
      toValue: 1,
      useNativeDriver: true,
      duration: 500,
    });
    Animated.sequence([ani1,ani2,ani3]).start();
  }
  
  render() {
    const scale1 = this.state.time1.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });
    const scale2 = this.state.time2.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });
    const scale3 = this.state.time3.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });
    return (
      <View style={styles.contain}>
      
        <Animated.View
          style={[styles.containBox, {transform: [{scale: scale1}]}]}>
          <TouchableHighlight
            onPress={() => Alert.alert('Simple Button pressed')}>
            <Text style={styles.containText}>Danh sách</Text>
          </TouchableHighlight>
        </Animated.View>
        <Animated.View
          style={[styles.containBox, {transform: [{scale: scale2}]}]}>
          <TouchableHighlight
            onPress={() => Alert.alert('Simple Button pressed')}>
            <Text style={styles.containText}>Thống kê</Text>
          </TouchableHighlight>
        </Animated.View>
        <Animated.View
          style={[styles.containBox, {transform: [{scale: scale3}]}]}>
          <TouchableHighlight
            onPress={() => Alert.alert('Simple Button pressed')}>
            <Text style={styles.containText}>Điểm danh & Nộp quỹ</Text>
          </TouchableHighlight>
        </Animated.View>
      </View>
    );
  }
}
