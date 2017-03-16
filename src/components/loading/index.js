import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Dimensions,
  ActivityIndicator
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default class Loading extends Component {

  constructor(props) {
    super(props);
  }

  dynamicStyle = () => {
    if (this.props.position === 'center') {
      return {
        position: 'absolute',
        top: height/2 - 15,
        left: width/2 - 15
      }
    } else {
      return {
        position: 'relative',
      }
    }
  }

  render() {
    return (
      <View style={this.dynamicStyle()}>
        <ActivityIndicator
          animating={true}
          color={this.props.color || '#000'}
          size={this.props.size || 'large'} />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
