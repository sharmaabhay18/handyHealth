import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';

class HomeRightHeaderComponent extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={style.containerStyle}>
      <TouchableOpacity
        onPress={() => this.props.logoutUser(navigation.navigate('Login'))}
      >
         <Icon
          name='logout'
           type='material-community'
           color='#808080'
           size={30}
         />
      </TouchableOpacity>
      </View>
    );
  }
}
const style = {
  containerStyle: {

  }
};

export default connect(null, actions)(HomeRightHeaderComponent);
