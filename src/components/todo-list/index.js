import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  ListView
} from 'react-native';

import Todo from '../todo';

const { width, height } = Dimensions.get('window');

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class TodoList extends Component {

  constructor(props, context) {
    super(props);

    this.state = {
      todoList: null
    };
  }

  componentWillMount() {
    let list = [
      {text: 'pan'},
      {text: 'leche'},
      {text: 'azúcar'}
    ];

    this.setState({
      todoList: ds.cloneWithRows(list)
    });
  }

  renderTodoList(todo) {
    return (
      <View>
        <Todo title={todo.text} />
      </View>
    )
  }

  render() {
    if (this.state.todoList) {
      return (
        <View style={styles.container}>
          <ListView
            dataSource={this.state.todoList}
            renderRow={(rowData) => this.renderTodoList(rowData)}
            enableEmptySections={true} />
        </View>
      );
    }

    return (
      <View style={styles.todoListEmpty}>
        <View style={styles.row}>
          <Text>Lista vacía</Text>
        </View>
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
  }
});
