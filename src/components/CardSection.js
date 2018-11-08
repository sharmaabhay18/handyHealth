import React, { Component } from 'react';
import { Text, View } from 'react-native';

const CardSection = ({ children }) => {
  return (
    <View style={style.containerStyle}>
    {children}
    </View>
  );
};

const style = {
  containerStyle: {
    borderWidth: 1,
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    borderColor: '#ddd',
    borderRadius: 5,
    justifyContent: 'flex-start'
  }
};
export { CardSection };
