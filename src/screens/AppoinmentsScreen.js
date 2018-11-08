import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import UnderConstruction from '../components/UnderConstruction';

class AppoinmentsScreen extends Component {

  componentDidMount() {
    this.props.startFetchingData();
  }

  render() {
    return (
      <UnderConstruction />
    );
  }
}

export default connect(null, actions)(AppoinmentsScreen);
