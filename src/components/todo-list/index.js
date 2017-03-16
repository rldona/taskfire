import React, { Component } from 'react';

import {connect} from 'react-redux';

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

class TodoList extends Component {

  constructor(props, context) {
    super(props);

    this.items = [];

    this.state = {
      todos: null
    };
  }

  componentDidMount() {
    firebase.database().ref('/todos/').on('child_added', (snapshot) => {
      this.items.push(snapshot.val());

      if (snapshot.val() && typeof snapshot.val() !== 'undefined') {
        todoListService.setTodo(snapshot.val());
        this.setState({
          todos: ds.cloneWithRows(this.items),
        });
      } else {
        this.setState({
          todos: ds.cloneWithRows([]),
          list: []
        });
      }
    });

    firebase.database().ref('/todos/').on('child_changed', (snapshot) => {
      for (let i = 0; i < this.items.length; i++) {
        if (snapshot.val().id === this.items[i].id) {
          this.items[i]['completed'] = snapshot.val().completed;
        }
      }

      this.setState({
        todos: ds.cloneWithRows(this.items)
      });
    });

    firebase.database().ref('/todos/').on('child_removed', (snapshot) => {
      this.items = [];
      todoListService.removeAllTodos();
      firebase.database().ref('/todos/').set(null);

      this.setState({
        todos: null,
        list: []
      });

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
    if (this.state.todos) {
      return (
        <ListView
          dataSource={this.state.todos}
          renderRow={(rowData) => this.renderTodoList(rowData)}
          enableEmptySections={true}
          showsVerticalScrollIndicator={false}
          horizontal={false} />
      );
    } else {
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{marginTop: 20, alignSelf: 'center', fontSize: 18}}>No hay elementos</Text>
        </View>
      );
    }
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

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodoList);