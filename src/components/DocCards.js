import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Header, Button } from 'react-native-elements';

class DocCards extends Component {

  renderDocCards() {
    return this.props.data.map(data => {
      return this.props.renderCards(data);
    });
  }

  render() {
    return (
      <ScrollView>
      <View style={style.containerStyle}>
        {this.renderDocCards()}
      </View>
      </ScrollView>
    );
  }
}

const style = {
  containerStyle: {
       justifyContent: 'space-around',
       width: '100%',
       flexDirection: 'row',
       flexWrap: 'wrap'
  }
};
export default DocCards;
