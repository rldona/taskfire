import React, { Component } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
  Vibration
} from 'react-native';

import * as firebase from 'firebase';
import * as todoListService from '../../todolist.service';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Checkbox extends Component {

  constructor(props) {
    super(props);
  }

  renderIconCheck(checked) {

    firebase.database().ref('/todos/').child(this.props.id).update({
      completed: this.props.checked,
      description: this.props.title
    });

    if (!checked) {
      return <Icon name='checkbox-blank-outline' color="#000" size={23} />
    } else {
      return <Icon name='checkbox-marked' color="#000" size={23} />
    }
  }

  renderIconTrash(checked) {
    if (!checked) {
      return null;
    } else {
      return (
        <TouchableOpacity
          style={styles.trash}
          activeOpacity={1}
          onPress={() => {
            firebase.database().ref('/todos/').child(this.props.id).remove();
            ToastAndroid.show('Elemento eliminado', ToastAndroid.SHORT)
          }}>
          <Icon name='delete' color="#E91E63" size={25} />
        </TouchableOpacity>
      )
    }
  }

  lineThrough() {
    if (this.props.checked) {
      return {
        fontSize: 18,
        color: '#000',
        marginLeft: 15,
        minWidth: 290,
        textDecorationLine: 'line-through'
      }
    } else {
      return {
        fontSize: 18,
        marginLeft: 15,
        color: '#000',
        minWidth: 290,
      }
    }
  }

  render() {
    return (
      <View style={styles.rowDual}>
        <TouchableOpacity
          style={styles.row}
          activeOpacity={1}
          onPress={this.props.onChange.bind(this, !this.props.checked)}>
          {this.renderIconCheck(this.props.checked)}
          <Text style={this.lineThrough()}>{this.props.title}</Text>
        </TouchableOpacity>
        {/*{this.renderIconTrash(this.props.checked)}*/}
      </View>
    )
  }

}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  rowDual: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#999'
  },
  trash: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 19,
    backgroundColor: '#f5f5f5'
  }
});