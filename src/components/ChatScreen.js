import React, { Component } from 'react';
import { TextInput, Text, View, ScrollView } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ChatScreen extends Component {

componentDidMount() {
       this.props.startFetchingData();
}

  onSubmitEditing() {
      const { text } = this.props.chat;
      if (!text) return;
      this.props.storeData(text, () => this.props.startFetchingData());

      this.props.clearFeild();
  }

  renderText(result) {
    const { firebaseText, text } = this.props.chat;
    if (firebaseText.length === 0) {
      return (
          <View style={style.botStyle}>
        <Text style={{ color: '#fff' }} >Hello! How may I help you?</Text>
        </View>
      );
    }

      return firebaseText.map((val) => {
         return (
           <View style={{ flex: 1 }} key={val.timeStamp}>

           <View style={style.botStyleText}>
           <Text>{val.text}</Text>
           </View>

           <View style={style.botStyle}>
           <Text>{val.speech}</Text>
           </View>

           </View>
         );
      });
  }

  render() {

    console.log('firebase', this.props.chat);
    const { text, result } = this.props.chat;
    return (
       <View style={style.containerStyle}>
         <ScrollView style={{ marginBottom: '15%' }}>
         {this.renderText(result)}
         </ScrollView>
        <TextInput
         placeholder='Type your message...'
         value={text}
         onChangeText={texts => this.props.updateText(texts)}
         onSubmitEditing={this.onSubmitEditing.bind(this)}
         style={style.inputStyle}
        />
        </View>
    );
  }
}

const style = {
  containerStyle: {
    flex: 1,
  },
  inputStyle: {

    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white'
  },
  botStyle: {
    borderRadius: 5,
    width: '60%',
    marginLeft: '2%',
    marginTop: '2%',
    padding: '1.5%',
    backgroundColor: '#39b9f9',
    flex: 1,
  },
  botStyleText: {
    flex: 1,
    borderRadius: 5,
    width: '60%',
    marginLeft: '35%',
    marginTop: '2%',
    padding: '1.5%',
    backgroundColor: '#ddd',
    flex: 1,
  }
};

const mapStateToProps = ({ chat }) => {
   return {
     chat
   };
};

export default connect(mapStateToProps, actions)(ChatScreen);
