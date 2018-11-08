import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Card, Header, Rating } from 'react-native-elements';
import SplashScreen from 'react-native-splash-screen';
import { connect } from 'react-redux';
import * as actions from '../actions';
import DocCards from '../components/DocCards';
import HomeRightHeaderComponent from '../components/HomeRightHeaderComponent';

const doctors = [{
   id: 1,
   name: 'Chris Wood',
   designation: 'MD',
   pic: require('../images/7d90a92902d81537573c034ed1db9ae93455efbc.jpg'),
   distance: 1.2,
   thumbnail: require('../images/631247dae8a50250468c0152d1667fbd255c2c41.jpg'),
   points: 3,
   patientImage: require('../images/14451e4e8829d65f1eb242e9a3c767ed3eac9b49.jpg'),
   speciality: 'Endocrinologist',
   rating: 3.8
}, {
   id: 2,
   name: 'Carlos Tevez',
   designation: 'MD',
   pic: require('../images/2d38a3c8654c0775166ce937c23c628fd527a1bf.jpg'),
   distance: 1.2,
   thumbnail: require('../images/46f7cc38cdf6f1478fadf88b72d74e6766f449e6.jpeg'),
   points: 5,
   patientImage: require('../images/04b17486db25783f9e9dc632207eccf02c9448d9.jpg'),
   speciality: 'Endocrinologist',
   rating: 3.2
}, {
   id: 3,
   name: 'Chris Wood',
   designation: 'MD',
   pic: require('../images/3851bc9a7f86ba4732fad3f780551f71af74e4c7.jpg'),
   distance: 2.2,
   thumbnail: require('../images/34e040951d9f69a87854959811187fec86a9da94.jpg'),
   points: 7,
   patientImage: require('../images/631247dae8a50250468c0152d1667fbd255c2c41.jpg'),
   speciality: 'Endocrinologist',
   rating: 4.5
}, {
   id: 4,
   name: 'Anna Tevez',
   designation: 'MD',
   pic: require('../images/bfd05a3c690c5ec2c0c9d7437d27babf1395e74f.jpg'),
   distance: 3.5,
   thumbnail: require('../images/7b60a315d23dcb82cd21d39e45ac2bb2aa16cef5.jpg'),
   points: 8,
   patientImage: require('../images/46f7cc38cdf6f1478fadf88b72d74e6766f449e6.jpeg'),
   speciality: 'Endocrinologist',
   rating: 4.2
}];

class HomeScreen extends Component {

  componentDidMount() {
    SplashScreen.hide();
  }
  renderCards(doctor) {
     return (
       <View key={doctor.id} style={style.cardViewStyle}>
       <TouchableOpacity onPress={() => this.props.navigation.navigate('Video', { doctor })}>
       <Card
       containerStyle={{ borderRadius: 10, borderWidth: 0 }}
       image={doctor.pic}
       imageStyle={{ borderTopRightRadius: 10,
                     borderTopLeftRadius: 10,
                     overflow: 'hidden'
                   }}
       >
       <View style={{ paddingLeft: '5%' }}>
       <View
      style={{
              flexDirection: 'row',
              justifyContent: 'flex-start'
               }}
       >
       <Text>{doctor.name}, </Text>
       <Text>{doctor.designation}</Text>
       </View>

        <Text
 style={{ fontSize: 12,
          color: '#808080',
          paddingTop: 2 }}
        >
          {doctor.distance} km nearby
          </Text>

          <View
          style={{ flexDirection: 'row',
                   paddingTop: 18,
                   alignItems: 'center',
                   justifyContent: 'space-between' }}
          >
            <View style={{ flexDirection: 'row' }}>
            <Image
                   source={doctor.thumbnail}
                   style={{ borderRadius: 5, height: 25, width: 25 }}
            />
            <View
                  style={{ height: 25,
                           width: 25,
                           backgroundColor: '#39b9f9',
                           borderRadius: 5,
                           justifyContent: 'center',
                           alignItems: 'center',
                           marginLeft: '5%'
                        }}
            >
            <Text style={{ color: '#fff', fontSize: 12 }}>+{doctor.points}</Text>
            </View>
            </View>
            <Rating
             readonly
             startingValue={doctor.rating}
             type='star'
             imageSize={10}
             style={{ marginRight: '10%' }}
            />
          </View>
        </View>

        </Card>
        </TouchableOpacity>
       </View>

     );
 }

  render() {
    const { navigation } = this.props;
    return (
      <View>
      <ImageBackground
        style={style.imageStyle}
        source={{ uri: 'https://image.freepik.com/free-vector/modern-medical-background_1035-8989.jpg' }}
      >
      <Header
       outerContainerStyles={{ borderBottomWidth: 0 }}
       leftComponent={{ icon: 'keyboard-backspace',
         type: 'material-community',
         color: '#808080',
         size: 30
       }}
       centerComponent={{
         text: 'Endocrinologist in Porto',
         style: { fontSize: 25 }
       }}
       rightComponent={<HomeRightHeaderComponent navigation={navigation} />}
       backgroundColor='transparent'
      />

      <DocCards data={doctors} renderCards={this.renderCards.bind(this)} />

      </ImageBackground>
      </View>
    );
  }
}

const style = {
imageStyle: {
  height: '100%',
  width: '100%'
},
cardViewStyle: {
  width: '48%',

}
};

const mapStateToProps = ({ chat }) => {
 return { rate: chat.rate,
           avgRate: chat.avgRate };
};

export default connect(mapStateToProps, actions)(HomeScreen);
