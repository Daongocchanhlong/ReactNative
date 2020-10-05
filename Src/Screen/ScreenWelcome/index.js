import React, { Component } from 'react'
import { 
  View,
  Text,
  Image,
} from 'react-native'

import styles from './style'
import * as Animate from '../../Component/Animate/Animate'
import * as Screen from '../screens'

import logo from '../../Asset/Image/logo.png'

export default class ScreenWelcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve('result');
      }, 2000),
    );
  };

  async componentDidMount() {
    const data = await this.performTimeConsumingTask();
    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }

  render() {
    if (!this.state.isLoading) return <Screen.ScreenHome navigation={this.props.navigation}/>;
    else
      return (
        <View style={styles.contain}>
          <Animate.LogoAnimate>
            <Image source={logo} style={styles.containLogo} />
          </Animate.LogoAnimate>
          <Animate.MoveAni>
            <Text style={styles.containText}>Welcome !!</Text>
          </Animate.MoveAni>
        </View>
      );
  }
}