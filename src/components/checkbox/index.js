import React, { Component } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Checkbox extends Component {
  constructor(props) {
    super(props);
  }

  renderIconCheck(checked) {
    if (!checked) {
      return <Icon name='checkbox-blank-outline' color="#000" size={23} />
    } else {
      return <Icon name='checkbox-marked' color="#000" size={23} />
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

      <TouchableOpacity
        style={styles.trash}
        activeOpacity={1}
        onPress={this.props.onChange.bind(this, !this.props.checked)}>

        <Icon name='delete' color="#E91E63" size={25} />

      </TouchableOpacity>

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
    paddingVertical: 10
  },
  rowDual: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  trash: {
    position: 'absolute',
    top: 7,
    right: 10
  }
});