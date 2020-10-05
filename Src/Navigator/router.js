import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import * as Screens from '../Screen/screens';
import * as ScreenNames from '../Define/ScreenName'

const Stack = createStackNavigator();

export default class Router extends Component {
    render() {
        return (
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName={ScreenNames.WELCOME_SCREEN}
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen
                name={ScreenNames.WELCOME_SCREEN}
                component={Screens.ScreenWelcome}
              />
              {/* <Stack.Screen
                name={ScreenNames.HOME_SCREEN}
                component={Screens.ScreenExam}
              /> */}
            </Stack.Navigator>
          </NavigationContainer>
        );
    }
}
