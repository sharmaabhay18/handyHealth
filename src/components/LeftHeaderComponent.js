import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

class LeftHeaderComponent extends Component {
  render() {
    return (
      <View style={style.containerStyle}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('main')}>
         <Icon
          name='keyboard-backspace'
           type='material-community'
           color='#ddd'
           size={40}
         />
      </TouchableOpacity>
      </View>
    );
  }
}
const style = {
  containerStyle: {
    flexDirection: 'column',
    backgroundColor: 'transparent',
    color: 'white'
  }
};

export default LeftHeaderComponent;
