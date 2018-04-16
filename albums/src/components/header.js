// import libs for making a component
import React from 'react';
import { Text } from 'react-native';

// make component
const Header = () => {
  const { textStyle } = styles;

  return <Text style={textStyle}>Albums!</Text>;
};

const styles = {
  textStyle: {
    fontSize: 20
  }
};

// make component available to other parts of the app
export default Header;
