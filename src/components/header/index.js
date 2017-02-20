import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import * as FirebaseService from '../../todolist.service';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Header extends Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Icon name="menu" size={27} color="#FFF" />
          <Text style={styles.title}>
            {this.props.title}
          </Text>
          <Text style={styles.version}>
            {this.props.version}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.row}
          activeOpacity={1}>
            <Text style={styles.todosCount}>{FirebaseService.todoList.length}</Text>
            <Icon name="check-all" size={27} color="#FFF" />
        </TouchableOpacity>
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
    paddingHorizontal: 10,
    paddingTop: 40
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 15
  },
  version: {
    color: '#FFF',
    fontSize: 12,
    marginTop: 5,
    marginLeft: 10
  },
  todosCount: {
    color: '#FFF',
    fontSize: 16,
    marginRight: 10
  }
});