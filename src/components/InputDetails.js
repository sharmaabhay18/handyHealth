import React from 'react';
import { TextInput, Text, View } from 'react-native';

const InputDetails = ({ label, value, placeholder, secureTextEntry, onChangeText }) => {
    const { textStyle, textInput, containerStyle } = style;
  return (
    <View style={containerStyle}>
       <Text style={textStyle}> { label } </Text>
       <TextInput
        style={textInput}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
       />
       </View>
 );
};

const style = {
textStyle: {
  fontSize: 18,
  textAlign: 'center',
  flex: 2
},
textInput: {
  paddingLeft: 5,
  fontSize: 18,
  flex: 3
},
containerStyle: {
  flexDirection: 'row',
  alignItems: 'center',
  marginLeft: 5,
  marginRight: 5,

}
};

export { InputDetails };
