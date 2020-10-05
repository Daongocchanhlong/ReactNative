import React, { Component } from 'react'
import { 
  View,
  Text,
  Image,
  Animated 
} from 'react-native'

import styles from './style'
import * as ScreenNames from '../../Define/ScreenName'
import logo from '../../Asset/Image/logo.png'

export default class ScreenWelcome extends Component{
  render(){
    return (
      <View style={styles.contain}>
      </View>
    );
  }
}

// function mapStateToProps(state){
//     return {isLoading: state.isLoading}
// }

// export default connect(mapStateToProps)(ScreenWelcome);