import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { InputDetails, CardSection } from '../components';


class Form extends Component {

    render() {
    console.log(this.props.email + this.props.password);
    return (
      <View>
      <CardSection>
       <InputDetails
         label='Email'
         placeholder='abc@xyz.com'
         value={this.props.email}
         onChangeText={email => this.props.updateEmail(email)}
       />
       </CardSection>

       <CardSection>
        <InputDetails
          secureTextEntry
          label='Password'
          placeholder='Enter Password'
          value={this.props.password}
          onChangeText={password => this.props.updatePassword(password)}
        />
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { email: auth.email, password: auth.password };
};

export default connect(mapStateToProps, actions)(Form);
