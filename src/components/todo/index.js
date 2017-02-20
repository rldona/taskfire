import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Checkbox from '../checkbox';

export default class Todo extends Component {

  constructor(props, context) {
    super(props);

    this.state = {
      allowExitApp: this.props.todo.completed,
    }
  }

  settState(checked) {
    this.setState({
      allowExitApp: checked
    });
  }

  render() {
    return (
      <Checkbox
        id={this.props.todo.key}
        title={this.props.todo.description}
        checked={this.state.allowExitApp}
        onChange={this.settState.bind(this)} />
    )
  }

}
