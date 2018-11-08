import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import { Icon } from 'react-native-elements';

class RightHeaderComponent extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={style.containerStyle}>
      <TouchableOpacity
      onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer(), { navigation })}
      >
         <Icon
          name='bars'
           type='font-awesome'
           color='#ddd'
           size={30}
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
    color: 'white',
    marginLeft: '30%'
  }
};

export default RightHeaderComponent;
