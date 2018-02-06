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
  Dimensions,
 } from 'react-native';
 import {
   StackNavigator,
   TabNavigator,
   DrawerNavigator
 } from 'react-navigation';
import Home from './pages/Home';
import LogoutButton from './LogoutButton';
import TestScreen from './pages/TestPage';
import SpecialItems from './pages/SpecialItems';
import ThingsToDo from './pages/ThingsToDo';
import MessagingPortal from './pages/MessagingPortal';
import PhotoGallery from './pages/Gallery';
import SettingsPage from './pages/Settings';

<<<<<<< HEAD

//Drawer Nagigator
=======
>>>>>>> a562cc1d8e038478e183b273ad5648cf6ee26e2a
const RootNavigator = DrawerNavigator({
  Home: {
    screen: LogoutButton,
    navigationOptions: {
      drawerLabel: 'Home',
      stackLabel: 'Home',
    },
  },
  Test: {
    screen: TestScreen,
    navigationOptions: {
      drawerLabel: 'Test',
    },
  },
  Medication: {
    screen: SpecialItems,
    navigationOptions: {
      drawerLabel: 'Medication/ Dietary Restrictions',
    },
  },
  ToDo: {
    screen: ThingsToDo,
    navigationOptions: {
      drawerLabel: 'Things to do',
    },
  },
  Message: {
    screen: MessagingPortal,
    navigationOptions: {
      drawerLabel: 'Messaging Portal',
    },
  },
  Photos: {
    screen: PhotoGallery,
    navigationOptions: {
      drawerLabel: 'Photo Gallery'
    },
  },
  Settings: {
    screen: SettingsPage,
    navigationOptions: {
      drawerLabel: 'Settings',
    },
  },
});

export default RootNavigator;
