import React, { Component } from 'react';
import { Animated,Text } from 'react-native'
import styles from './style'
import {connect} from 'react-redux';
import * as types from '../../Redux/Constants/actiontypes'

class FadeView extends Component {
    constructor(props) {
        super(props);
        this.state={
            fadeAnimate: new Animated.Value(0),
        }
    }
    componentDidMount() {
        Animated.timing(
            this.state.fadeAnimate,
            {
                toValue:1,
                duration: 3000,
                useNativeDriver: true,
            }
        ).start(()=>{
            this.props.dispatch({
                type : types.ISLOADING
            })
        });
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

function mapStateToProps(state) {
  return {isLoading: state.isLoading};
}

export default connect(mapStateToProps)(FadeView);