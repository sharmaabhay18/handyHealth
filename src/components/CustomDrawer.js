import React, { Component } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import { Rating } from 'react-native-elements';
import ChatScreen from './ChatScreen';

const SCREEN_WIDTH = Dimensions.get('window').width / 1.2;

class CustomDrawer extends Component {

  render() {
  const { doctor } = this.props.data.navigation.state.routes[0].params;

    return (
      <View style={{ width: SCREEN_WIDTH, flex: 1 }}>
      <View
          style={{ flexDirection: 'row',
                   justifyContent: 'flex-start',
                   marginTop: '20%',
                   flex: 1
    }}>

       <Image
         source={doctor.pic}
         style={{ borderRadius: 10,
                  width: '35%',
                  height: '85%',
                  marginLeft: '8%' }}
       />
        <View style={{ flexDirection: 'column', marginLeft: '5%' }}>
        <Text
          style={{
                fontSize: 20,
                paddingBottom: '2%'
        }}
        >
        {doctor.name}, {doctor.designation}</Text>
        <Text style={{ color: '#ddd' }}>{doctor.speciality}</Text>
         <View style={{ flexDirection: 'row',
                        alignItems: 'center',
                        paddingTop: '30%'
         }}
         >
           <Text>{doctor.rating}</Text>
           <Rating
            readonly
            startingValue={5}
            type='star'
            imageSize={10}
            style={{ marginLeft: '5%' }}
           />
         </View>
        </View>
       </View>

                <View
                style={{ borderBottomWidth: 2,
                  borderTopWidth: 2,
                  borderColor: '#ddd',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  flexDirection: 'row',
                  marginTop: '-15%'
                  }}
                >
                 <View
                 style={{ width: '30%',
                   borderColor: '#ddd',
                   borderRightWidth: 2,
                   padding: 10 }}
                 >
                  <Text style={{ color: '#39b9f9', fontSize: 24, textAlign: 'center' }}>02:42</Text>
                 </View>
                 <View style={{ justifyContent: 'center', padding: 10, width: '70%' }}>
                  <Text style={{ color: '#ddd', fontSize: 20 }}> General consultation</Text>
                 </View>
                </View>

                <View
                style={{
                  borderBottomWidth: 2,
                  borderColor: '#ddd',
                  flexDirection: 'column',
                  paddingLeft: '5%' }}
                >
                  <Text
                  style={{
                    marginTop: '8%',
                    color: '#ddd',
                    fontSize: 16 }}
                  > Billing Information </Text>
                  <View style={{ flexDirection: 'row', marginBottom: '8%', marginTop: '2%' }}>
                   <Image
                    style={{ marginLeft: '2%', width: '10%', height: '50%' }}
                    source={{ uri: 'https://mybroadband.co.za/news/wp-content/uploads/2016/12/Visa-logo.jpg' }}
                   />
                   <Text style={{ fontSize: 14, marginLeft: '5%' }}>**** 9999</Text>
                  </View>
                </View>

                <View style={{ flex: 1 }}>
                <Text
                 style={{
                  fontSize: 12,
                  color: '#ddd',
                  paddingLeft: '5%',
                  paddingTop: '5%'
                }}
                >Notes from Doctor</Text>

                <ChatScreen />
                </View>

  </View>

    );
  }
}

export default CustomDrawer;
