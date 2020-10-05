import React, { Component } from 'react';
import { Animated,Text } from 'react-native'
import styles from './style'
import {connect} from 'react-redux';
import * as types from '../../Redux/Constants/actiontypes'

class Logo extends Component {
    constructor(props) {
        super(props);
        this.state={
            fadeAnimate: new Animated.Value(0),
        }
    }
    componentDidMount() {
       
    }

    render() {
        const opacity = this.state.fadeAnimate;
        return (
            <Animated.View style={{opacity}}>
                <Text style={styles.text}>Welcome!!!!</Text>
            </Animated.View>
        );
    }
}

export default connect()(Logo);