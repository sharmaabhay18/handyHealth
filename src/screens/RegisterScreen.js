import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { InputDetails, CardSection } from '../components';
import Form from './Form';

class RegisterScreen extends Component {
  componentDidMount() {
    this.props.navigation.addListener('willFocus', () => {
      this.props.clearForm();
    });
  }

  renderError() {
    const { error } = this.props;
    if (error) {
      return <Text style={styles.errorStyle}> Registeration Failed!! Please Try Again </Text>;
    }
  }

  renderButton() {
  const { email, password, phone } = this.props;
   if (this.props.loading) {
     return (<Button
      loading
      containerViewStyle={{ marginTop: 15 }}
      backgroundColor='#39b9f9' borderRadius={5}
     />);
   }
   return (
     <Button
       borderRadius={5}
       raised
       title='Register'
       containerViewStyle={{ marginTop: 15 }}
       backgroundColor='#39b9f9'
       textStyle={{ fontSize: 18 }}
       onPress={() => {
         this.props.createUser({ email, password, phone },
         () => this.props.navigation.navigate('main')
         );
       }
     }
     />
   );
  }

  render() {
  return (
    <View>
    <Header
      centerComponent={{
        text: 'Register',
        style: { color: '#fff', fontSize: 24, letterSpacing: 2.2, fontWeight: 'bold' }
      }}
      backgroundColor='#39b9f9'
    />
    <View>
    <Form {...this.props} />

    <CardSection>
    <InputDetails
      label='Phone No.'
      placeholder='+91-8888888888'
      value={this.props.phone}
      onChangeText={phone => this.props.updatePhone(phone)}
    />
    </CardSection>

    {this.renderButton()}

    <View>
     {this.renderError()}
    </View>

    </View>
    </View>
  );
}
}

const mapStateToProps = ({ auth }) => {
  return { email: auth.email,
           password: auth.password,
           phone: auth.phone,
           loading: auth.loading,
           error: auth.error,
            token: auth.token };
};

const styles = {
  errorStyle: {
    marginTop: 10,
    color: 'red',
    fontSize: 12,
    textAlign: 'center'
  }
};
export default connect(mapStateToProps, actions)(RegisterScreen);
