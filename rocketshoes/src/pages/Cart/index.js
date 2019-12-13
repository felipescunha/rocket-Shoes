import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Cart extends Component {
  static navigationOptions = () => ({
    title: 'Rockertshoes | Cart',
  });

  render() {
    return (
      <View>
        <Text>Cart</Text>
      </View>
    );
  }
}
