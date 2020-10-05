import React, { Component } from 'react';
import { Animated,Easing } from 'react-native'

export default class LogoAnimate extends Component {
    constructor(props) {
        super(props);
        this.state={
            time: new Animated.Value(0),
        }
    }
    componentDidMount() {
        Animated.timing(
            this.state.time,
            {
                toValue:1,
                duration:1000,
                useNativeDriver:true,
            }
        ).start();
    }

    render() {
        const scale = this.state.time.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        });
        return (
            <Animated.View style={{
                ...this.props.style,
                transform:[{scale}],
                }}>
                {this.props.children}
            </Animated.View>
        );
    }
}
