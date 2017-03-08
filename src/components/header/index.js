import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity
} from 'react-native';

import * as firebase from 'firebase';
import * as todoListService from '../../todolist.service';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Header extends Component {

  constructor(props, context) {
    super(props);
  }

  removeAllTodos() {
    Alert.alert(
      'Eliminar lista de tareas',
      '¿Realmente quieres eliminar toda la lista de tareas?',
      [
        {
          text: 'No',
          onPress: () => {
            console.log('Cancel Pressed');
          },
        },
        {
          text: 'Sí',
          onPress: () => {
            todoListService.setRemoveAll(true);
            firebase.database().ref('/todosDEV/').remove();
          }
        }
      ],
      {
        cancelable: true
      }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          {/*<Icon name="menu" size={27} color="#FFF" />*/}
          <Text style={styles.title}>
            {this.props.title}
          </Text>
        </View>

        <TouchableOpacity
          onPress={this.removeAllTodos.bind(this)}
          style={styles.row}
          activeOpacity={1}>
          <Icon name="check-all" size={25} color="#FFF" />
          <Text style={{color: '#FFF', marginLeft: 5, fontSize: 14}}>BORRAR LISTA</Text>
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
    marginLeft: 5 //15
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
