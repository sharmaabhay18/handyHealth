import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, Icon } from 'react-native-elements';

class UnderConstruction extends Component {
  render() {
    return (
      <Card
       title='Under Construction'
       titleStyle={{ color: '#808080', letterSpacing: 2 }}
      >
      <Icon name='ios-construct' type='ionicon' size={150} />
      </Card>
    );
  }
}

export default UnderConstruction;
