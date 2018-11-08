import React, { Component } from 'react';
import { Text, View } from 'react-native';

class HeaderComponent extends Component {
  render() {
    const { name,
            designation
          } = this.props.navigation.state.params.doctor;

    return (
      <View style={style.containerStyle}>
      <Text style={{ letterSpacing: 1, fontSize: 16, color: '#ddd' }}>Consultation with</Text>
      <Text style={{ letterSpacing: 1, fontSize: 24, color: '#ddd' }}>{name}, {designation}</Text>
      </View>
    );
  }
}
const style = {
  containerStyle: {
    flexDirection: 'column',
    backgroundColor: 'transparent',
    paddingLeft: '8%',
    color: 'white'
  }
};

export default HeaderComponent;
