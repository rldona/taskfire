import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import * as firebase from 'firebase';
import * as todoListService from '../../todolist.service';

import Checkbox from '../checkbox';

export default class Todo extends Component {

  constructor(props, context) {
    super(props);
  }

  componentWillMount() {
    this.state = {
      completed: this.props.todo.completed,
    }
  }

  changeTodoState(checked) {
    this.setState({
      completed: checked
    });
  }

  render() {
    return (
      <Checkbox
        id={this.props.todo.id}
        title={this.props.todo.description}
        checked={this.state.completed}
        onChange={this.changeTodoState.bind(this)} />
    )
  }

}
