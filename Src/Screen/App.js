import React, { Component } from 'react'
import Router from '../Navigator/router';
import { Provider } from 'react-redux'
import store from '../Redux/Store'
export default class App extends Component{    
    render(){
        return(
            <Provider store ={store}>
                <Router/>
            </Provider>
        );
    }
}
