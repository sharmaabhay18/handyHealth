import React, { Component } from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Icon, Header } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';
import HeaderComponent from '../components/HeaderComponent';
import LeftHeaderComponent from '../components/LeftHeaderComponent';
import RightHeaderComponent from '../components/RightHeaderComponent';

class VideoCallScreen extends Component {

  state = { mute: false }

  componentDidMount() {
    const { id } = this.props.navigation.state.params.doctor;
     this.props.startFetchingData();
     this.props.getStarRating(id);
  }

  renderMicroPhone() {
    if (!this.state.mute) {
      return (
         <Icon name='microphone' type='material-community' size={30} color='#808080' />
      );
    }
    return (
       <Icon name='microphone-off' type='material-community' size={30} color='#39b9f9' />
    );
  }
  render() {
    const { mute } = this.state;
    const { navigation } = this.props;
    const { params } = this.props.navigation.state;
    const { timeStyle,
            endcallStyle,
            microphoneStyle,
            imageStyle,
            buttonStyle,
            patientImageStyle } = style;

    return (
      <ImageBackground
       style={imageStyle}
       source={navigation.state.params.doctor.pic}
      >

       <Header
         innerContainerStyles={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}
         outerContainerStyles={{ borderBottomWidth: 0, marginTop: 25 }}
         backgroundColor='transparent'
         leftComponent={<LeftHeaderComponent navigation={navigation} />}
         centerComponent={<HeaderComponent navigation={navigation} />}
         rightComponent={<RightHeaderComponent navigation={navigation} />}

       />
       <Image
         source={navigation.state.params.doctor.patientImage}
         style={patientImageStyle}
       />
        <View style={buttonStyle}>
          <TouchableOpacity
             style={microphoneStyle}
             onPress={() => this.setState({ mute: !mute })}
          >
           {this.renderMicroPhone()}
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => navigation.navigate('summary', { params })}
          style={endcallStyle}
          >
           <Icon name='call-end' type='simple-line-icon' size={30} color='#fff' />
          </TouchableOpacity>
        </View>
        <Text style={timeStyle}>02:42</Text>

      </ImageBackground>
    );
  }
}

const style = {
  timeStyle: {
    color: '#bfbfbf',
    fontSize: 22,
    marginLeft: '42.5%',
    marginBottom: '2.5%'
  },
  endcallStyle: {
    backgroundColor: '#ff3333',
    borderRadius: 50,
    padding: '3.5%',
    marginLeft: '2.5%',

  },
  microphoneStyle: {
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: '3.5%',
    marginRight: '2.5%'
  },
  buttonStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    postion: 'absolute',
    marginBottom: '1.5%'
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    position: 'relative'
  },
  patientImageStyle: {
    position: 'absolute',
    height: '12%',
    width: '25%',
    bottom: 0,
    right: 0,
    marginBottom: '30%',
    marginRight: '7%',
    borderRadius: 5
  }
};

export default connect(null, actions)(VideoCallScreen);
