/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Login from './Login';
import Main from './Main'
import Profile from './Profile'
import { StackNavigator } from "react-navigation";
import SideBar from "./Sidebar";

const rootNavigator = StackNavigator(
  {
    login: {
      screen: Login,
    },
    main: {
      screen: Main,
      headerTitle: 'Principal'
    },
    profile: {
      screen: Profile,
      headerTitle: 'Profile'
    }
  },
  {
    initialRouteName: 'login',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    // contentComponent: props => <SideBar {...props} />
  }
)

export default rootNavigator;