import React, { Component } from 'react'
import { 
  View,
  Text,
  TouchableHighlight,
} from 'react-native'

import styles from './style'
import * as ScreenNames from '../../Define/ScreenName';
import * as Comp from '../../Component/Component'
import * as Color from '../../Define/Color'

export default class ScreenList extends Component {
  constructor(props) {
    super(props);
    this.state={
      isChoose:'ALL',
      sumMem:0
    }
  }

  pressed(val){
    this.setState({
      isChoose:val,
      sumMem:Math.floor(Math.random() * 100) + 1 
    })
  }
  
  setColor(isChoose){
    style=styles.text;
    if(isChoose === this.state.isChoose){
      style=[styles.text,{color:Color.FOOTER_TEXT_PRESSED_COLOR}]
    }
    return style;
  }

  render() {
      return (
        <View style={styles.contain}>
          <View style={styles.header}>
            <Text style={styles.text}>TỔNG SỐ : {this.state.sumMem}</Text>
          </View>
          <View style={styles.body}>
            <Comp.MemberBox/>
          </View>
          <View style={styles.footer}>
            <TouchableHighlight onPress={() => this.pressed('ALL')}>
              <Text style={this.setColor('ALL')}>ALL</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.pressed('OVU')}>
              <Text style={this.setColor('OVU')}>OVU</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.pressed('TNA')}>
              <Text style={this.setColor('TNA')}>TNA</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.pressed('TNU')}>
              <Text style={this.setColor('TNU')}>TNU</Text>
            </TouchableHighlight>
          </View>
        </View>
      );
  }
}