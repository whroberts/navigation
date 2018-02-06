"use strict";
import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  Alert,
  Dimensions
 } from 'react-native';
 import {
   StackNavigator,
   TabNavigator,
   DrawerNavigator
 } from 'react-navigation';//imports the components from the file
import RootNavigator from './src/Menu';

//index class to actually launch to app
const MyApp = StackNavigator({
  Tabs: { screen: RootNavigator }
})

AppRegistry.registerComponent('aggie-stem', () => MyApp);
