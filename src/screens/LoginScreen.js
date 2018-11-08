import React, { Component } from 'react';
import { Text, View, AsyncStorage, ImageBackground } from 'react-native';
import { Header, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import _ from 'lodash';
import * as actions from '../actions';
import Form from './Form';

class LoginScreen extends Component {
 state ={ token: null }
  componentWillMount() {
    this.props.navigation.addListener('willFocus', () => {
      this.props.clearForm();
    });

    this.onAuthComplete();
  }

  async onAuthComplete() {
     let token = await AsyncStorage.getItem('user_token');
     console.log('async', token);
    if (token) {
      console.log('tok', token);
      this.props.navigation.navigate('Home');
      this.setState({ token });
    } else {
      this.setState({ token: false });
      SplashScreen.hide();
    }
  }

  renderError() {
    const { error } = this.props;
    if (error) {
      return <Text style={styles.errorStyle}> Authentication Failed!! Please Try Again </Text>;
    }
  }

  renderButton() {
  const { email, password } = this.props;
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
       title='Login'
       containerViewStyle={{ marginTop: 15 }}
       backgroundColor='#39b9f9'
       textStyle={{ fontSize: 18 }}
       onPress={() => {
         this.props.loginUser({ email, password },
           () => this.props.navigation.navigate('main'));
       }
     }
     />
   );
  }

  render() {
  if (_.isNull(this.state.token)) {
    return (<ImageBackground
     style={{ width: '100%', height: '100%' }}
    source={require('../../android/app/src/main/res/drawable-xhdpi/launch_screen.png')}
    />);
  }
  return (
    <View>
    <Header
      centerComponent={{
        text: 'Login',
        style: { color: '#fff', fontSize: 24, letterSpacing: 2.2, fontWeight: 'bold' }
      }}
      backgroundColor='#39b9f9'
    />
    <View>
    <Form />

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
           loading: auth.loading,
           error: auth.error };
};

const styles = {
  errorStyle: {
    marginTop: 10,
    color: 'red',
    fontSize: 12,
    textAlign: 'center'
  }
};

export default connect(mapStateToProps, actions)(LoginScreen);
