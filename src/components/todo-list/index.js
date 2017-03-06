import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  ListView,
  ActivityIndicator,
} from 'react-native';

import * as firebase from 'firebase';
import * as todoListService from '../../todolist.service';

import Todo from '../todo';

const { width, height } = Dimensions.get('window');
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

let todos = [];

export default class TodoList extends Component {

  constructor(props, context) {
    super(props);

    this.state = {
      todos: null,
      list: null
    };
  }

  componentWillMount() {

    firebase.database().ref('/todos').on('value', (snapshot) => {

      console.log('value');

      if(!snapshot.val()) {
        this.setState({
          list: []
        });
      }
    });

    firebase.database().ref('/todos').on('child_added', (snapshot) => {

      console.log('child_added');

      if (snapshot.val() && typeof snapshot.val() !== 'undefined') {
        todoListService.setTodo(snapshot.val());
        this.setState({
          todos: ds.cloneWithRows(todoListService.getTodos()),
          list: snapshot.val()
        });
      } else {
        this.setState({
          todos: ds.cloneWithRows([]),
          list: []
        });
      }
    });

    firebase.database().ref('/todos').on('child_changed', (snapshot) => {

      console.log('child_changed');
      console.log(snapshot.val());

      // buscar todo y cambiar valor
      todoListService.changeProperty(snapshot.val(), 'completed');
      // pintar lista
      // this.setState({
      //   todos: ds.cloneWithRows(todoListService.getTodos())
      // });

    });

    firebase.database().ref('/todos').on('child_removed', (snapshot) => {

      console.log('child_removed');

      if (todoListService.getRemoveAll()) {
        todoListService.removeAllTodos();

        this.setState({
          todos: null,
          list: []
        });

        todoListService.setRemoveAll(false);
      }
    });
  }

  renderTodoList(todo) {
    return (
      <View>
        <Todo todo={todo} />
      </View>
    )
  }

  render() {
    if (this.state.list) {
      if (this.state.todos) {
        if (this.state.todos._cachedRowCount > 0) {
          return (
            <ListView
              dataSource={this.state.todos}
              renderRow={(rowData) => this.renderTodoList(rowData)}
              enableEmptySections={true}
              showsVerticalScrollIndicator={false}
              horizontal={false} />
          )
        }
      } else {
        return (
          <View styles={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red'}}>
            <Text style={{marginTop: 20, alignSelf: 'center', fontSize: 18}}>No hay elementos</Text>
          </View>
        )
      }
    }

    return (
      <View style={{marginTop: 20}}>
        <ActivityIndicator
          color='#000'
          animating={true}
          size={50}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    elevation: 0,
    backgroundColor: '#FFF',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  todoListEmpty: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: height - 170
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});
