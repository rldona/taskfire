import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  Dimensions,
} from 'react-native';

import * as firebase from 'firebase';
import * as todoListService from '../../todolist.service';

const { width, height } = Dimensions.get('window');

export default class Search extends Component {

  constructor(props, context) {
    super(props);

    this.state = {
      todo: ''
    };
  }

  addTodo() {
    if (this.state.todo && typeof this.state.todo !== 'undefined' && this.state.todo !== '') {
      if (!todoListService.findTodo(this.state.todo)) {
        var newPostKey = firebase.database().ref().child('/todos/').push().key;

        firebase.database().ref('/todos/' + newPostKey).set({
          id: newPostKey,
          description: this.state.todo,
          completed: false
        });

        this.setState({
          todo: ''
        });
      } else {
        Alert.alert(
          'Elemento repetido',
          'El elemento que quieres añadir ya está en la lista',
          [
            { text: 'OK' }
          ],
          {
            cancelable: true
          }
        );
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.searchContainer}
          onChangeText={(todo) => this.setState({todo})}
          onSubmitEditing={() => this.addTodo()}
          value={this.state.todo}
          placeholder="Añade elementos a la lista"
          autoFocus={false}
          underlineColorAndroid='#666'
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
