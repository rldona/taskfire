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
      allowExitApp: false,
    }
  }

  render() {
    return (
      <Checkbox
        title={this.props.title}
        checked={this.state.allowExitApp}
        onChange={(checked) => this.setState({allowExitApp: checked})} />
    )
  }
}
