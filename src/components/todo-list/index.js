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

import * as FirebaseService from '../../todolist.service';
import Todo from '../todo';

const { width, height } = Dimensions.get('window');
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class TodoList extends Component {

  constructor(props, context) {
    super(props);

    this.state = {
      todoList: null
    };

    this.ref = FirebaseService.getReference();
  }

  componentWillMount() {
    this.ref.on('child_added', (data) => {
      if (data.val() && typeof data.val() !== 'undefined' && data.val() !== '') {
        FirebaseService.todoList.push({
          key: data.key,
          description: data.val().description,
          completed: data.val().completed
        });
      }

      this.setState({
        todoList: ds.cloneWithRows(FirebaseService.todoList)
      });
    });

    this.ref.on('child_removed', (todo) => {
      this.borrarTodo(todo);
    });
  }

  borrarTodo(todo) {
    for (var i = 0, size = FirebaseService.todoList.length; i < size; i++) {
      if (todo.key === FirebaseService.todoList[i].key) {
        FirebaseService.todoList.splice(i, 1);

        this.setState({
          todoList: ds.cloneWithRows(FirebaseService.todoList)
        });

        return true;
      }
    }

    return false;
  }

  renderTodoList(todo) {
    return (
      <View>
        <Todo todo={todo} />
      </View>
    )
  }

  render() {


    if (this.state.todoList) {
      // if (this.state.todoList.length > 0) {
        return (
          <View style={styles.container}>
            <ListView
              dataSource={this.state.todoList}
              renderRow={(rowData) => this.renderTodoList(rowData)}
              enableEmptySections={true}
              showsVerticalScrollIndicator={false}
              horizontal={false} />
          </View>
        )
      /*} else {
        return (
          <View style={styles.todoListEmpty}>
            <View style={styles.row}>
              <Text>Lista vacía</Text>
            </View>
          </View>
        )
      }*/
    }

    return (
      <View style={styles.todoListEmpty}>
        <ActivityIndicator
          style={[styles.centering, styles.gray]}
          color="#000"
          size={50}
        />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    elevation: 5,
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
    height: height - 200
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});
