import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CallSummaryScreen extends Component {

  componentWillMount() {
    const { id } = this.props.navigation.state.params.params.doctor;
    this.renderRatings(id);
  }

  starRating({ rate, id }) {
    this.props.starRatingAction({ rate, id }, this.props.getStarRating(id));
  }

  renderRatings(id) {
    return (<Rating
      startingValue={this.props.avgRate}
       fractions={1}
       onFinishRating={(rate) => this.starRating({ rate, id })}
    />);
  }

  render() {
    const { thankStyle } = style;
    const { doctor } = this.props.navigation.state.params.params;
    const { id } = doctor;
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>

       <View style={thankStyle}>
        <View style={{ width: '80%' }}>
         <Text style={{ fontSize: 25 }}>Thank you for using our services.</Text>
        </View>


         <TouchableOpacity
         onPress={() => this.props.navigation.navigate('main')}
         style={{ width: '20%', marginRight: '5%' }}
         >
          <Text style={{ color: '#39b9f9', fontWeight: 'bold', fontSize: 20 }}> Done </Text>
         </TouchableOpacity>
       </View>

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
           padding: 10,
           flexDirection: 'column',
           alignItems: 'center'
        }}
         >
          <Text style={{ color: '#808080', fontSize: 14 }}>Duration</Text>
          <Text style={{ color: '#39b9f9', fontSize: 24, textAlign: 'center' }}>02:42</Text>
         </View>

         <View
          style={{ justifyContent: 'center',
                        padding: 10,
                        width: '30%',
                        alignItems: 'center',
                        borderColor: '#ddd',
                        borderRightWidth: 2,
                       }}
         >
          <Text style={{ color: '#808080', fontSize: 14 }}> Charged</Text>
          <Text style={{ fontSize: 24 }}> $150</Text>

         </View>
         <View
         style={{
           width: '40%',
           flexDirection: 'column',
           padding: 10
            }}
         >
           <Text
           style={{
             color: '#808080',
             fontSize: 14 }}
           > Credit Card </Text>
           <View style={{ flexDirection: 'row', marginBottom: '8%', marginTop: '2%' }}>
            <Image
             style={{ marginLeft: '2%', width: '20%', height: '80%' }}
             source={{ uri: 'https://mybroadband.co.za/news/wp-content/uploads/2016/12/Visa-logo.jpg' }}
            />
            <Text style={{ fontSize: 16, marginLeft: '5%' }}>**** 9999</Text>
           </View>
         </View>
      </View>

      <View
      style={{
         borderBottomWidth: 2,
         borderColor: '#ddd',
         padding: 20,
         alignItems: 'center'
      }}
      >
        <Text
        style={{ textAlign: 'center',
                       fontSize: 18,
                       paddingBottom: '2%' }}
        >How would you rate your call?</Text>
       {this.renderRatings(id)}
      </View>

      <View style={{ marginBottom: '1%' }}>
      <View style={{ flexDirection: 'column', padding: '5%' }}>
       <Text>Your prescription</Text>
      </View>
     <View
     style={{
       width: '90%',
       flexDirection: 'row',
       marginLeft: '5%',
       marginRight: '5%',
       borderLeftWidth: 4,
       borderRadius: 5,
       borderTopWidth: 0,
       elevation: 4,
       borderColor: '#39b9f9' }}
     >
       <View
       style={{
         flexDirection: 'row',
         flex: 1,
         alignItems: 'center',
         borderRightWidth: 2,
         borderColor: '#ddd' }}
       >
       <View
       style={{ backgroundColor: '#39b9f9',
       borderRadius: 5,
       height: '33%',
       width: '15%',
       justifyContent: 'center',
       alignItems: 'center',
       marginLeft: '5%'
     }}><Text>1</Text></View>
       <Text style={{ fontSize: 24, marginLeft: '2%' }}> Xanax 1mg </Text>
       </View>
       <View style={{ padding: '5%', flexDirection: 'column' }}>
        <Text style={{ fontSize: 12 }}> Code: 1209123 </Text>
        <Text style={{ fontSize: 12 }}> Dispensa: 1209123 </Text>
        <Text style={{ fontSize: 12 }}> Autorizacao: 12091 </Text>
      </View>
      </View>

      </View>

      </View>
    );
  }
}

const style = {
  thankStyle: {
    flexDirection: 'row',
    marginTop: '8%',
    marginBottom: '-15%',
    marginLeft: '5%',
    marginRight: '3%'
  }
};

const mapStateToProps = ({ chat }) => {
 return { rate: chat.rate,
           avgRate: chat.avgRate };
};

export default connect(mapStateToProps, actions)(CallSummaryScreen);
