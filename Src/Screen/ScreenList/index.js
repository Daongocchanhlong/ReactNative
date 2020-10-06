import React, { Component } from 'react'
import { 
  View,
  Text,
  TouchableHighlight,
} from 'react-native'

import styles from './style'
import * as ScreenNames from '../../Define/ScreenName';

export default class ScreenList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <View style={styles.contain}>
          <View style={styles.containItem}>
            <View style={styles.containNamePhone}>
              <Text style={styles.text}>Đào Ngọc Chánh Long</Text>
              <Text style={styles.text}>0779411697</Text>
            </View>
            <View style={styles.containNamePhone}>
              <Text style={styles.text}>Tâm Hải</Text>
              <Text style={styles.text}>k33/09 Bàu trảng 1</Text>
            </View>
          </View>
        </View>
      );
  }
}