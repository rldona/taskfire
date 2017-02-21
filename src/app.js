import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import SplashScreen from 'react-native-smart-splash-screen';

import * as FirebaseService from './todolist.service';

import Header from './components/header';
import Search from './components/search';
import TodoList from './components/todo-list';

export default class App extends Component {

  constructor(props, context) {
    super(props);
    FirebaseService.fb();
  }

  componentDidMount () {
    SplashScreen.close({
      animationType: SplashScreen.animationType.scale,
      duration: 150,
      delay: 50,
    });
  }

  render() {
    return (
      <View style={styles.container}>

        <StatusBar hidden={false} backgroundColor="rgba(0,0,0, 0.2)" translucent={true} />

        <Header title="Taskfire" version="v2.3.0" />

        <Search />

        <TodoList />

      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'rgba(139, 195, 74, 0.4)'
    backgroundColor: '#FFF'
  },

});
