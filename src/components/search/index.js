import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
} from 'react-native';

import * as FirebaseService from '../../todolist.service';

const { width, height } = Dimensions.get('window');

export default class Search extends Component {

  constructor(props, context) {
    super(props);

    this.todosRef = FirebaseService.getReference();

    this.state = {
      todo: ''
    };
  }

  _addTodo(todo) {

    console.log(todo);

    // save to Firebase
    if (todo && typeof todo !== 'undefined' && todo !== '') {
      this.todosRef.push({
          description: todo,
          completed: false
      });

      // save to FirebaseService
      // FirebaseService.todoList.push({
      //   description: todo,
      //   completed: false
      // });

      this.setState({
        todo: ''
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.searchContainer}
          onChangeText={(todo) => this.setState({todo})}
          onSubmitEditing={(todo) => this._addTodo(this.state.todo)}
          value={this.state.todo}
          placeholder="Ejm: pan, leche, azúcar, agua..."
          autoFocus={false}
          underlineColorAndroid='#AAA'
          selectionColor='#000'
          clearTextOnFocus={false}
          placeholderTextColor="#AAA"
          defaultValue=""
          keyboardType="web-search"
          autoCorrect={false}
          returnKeyType="search" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingTop: 0,
    paddingBottom: 10,
    paddingHorizontal: 10
  },
  searchContainer: {
    color: '#FFF',
    fontSize: 18,
    minWidth: width-20
  }
});
