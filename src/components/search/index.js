import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default class Search extends Component {

  constructor(props, context) {
    super(props);

    this.state = {
      todo: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.searchContainer}
          onChangeText={(todo) => this.setState({todo})}
          value={this.state.todo}
          placeholder="Ejm: pan, leche, azúcar, agua..."
          autoFocus={false}
          underlineColorAndroid='#AAA'
          selectionColor='#000'
          clearTextOnFocus={false}
          placeholderTextColor="#AAA"
          defaultValue=""
          keyboardType="web-search"
          autoCorrect={false}
          returnKeyType="search" />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingTop: 0,
    paddingBottom: 10,
    paddingHorizontal: 10
  },
  searchContainer: {
    color: '#FFF',
    fontSize: 18,
    minWidth: width-20
  }
});
