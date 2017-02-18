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
        textDecorationLine: 'line-through'
      }
    } else {
      return {
        fontSize: 18,
        color: '#000'
      }
    }
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.row}
        activeOpacity={1}
        onPress={this.props.onChange.bind(this, !this.props.checked)}>
        <Text style={this.lineThrough()}>{this.props.title}</Text>
        {this.renderIconCheck(this.props.checked)}
      </TouchableOpacity>
    )
  }

}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10
  }
});