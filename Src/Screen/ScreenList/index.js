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
    this.state = {
      isLoading: true,
    };
  }

  render() {
      return (
        <View style={styles.contain}>
          <TouchableHighlight
            onPress={() =>
              this.props.navigation.navigate(ScreenNames.WELCOME_SCREEN)
            }>
            <Text style={{fontSize: 30}}>click me</Text>
          </TouchableHighlight>
        </View>
      );
  }
}