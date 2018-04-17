import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = () => (
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>Click Me</Text>
  </TouchableOpacity>
);

const styles = {
  button: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff', // ios-blue
    marginLeft: 5,
    marginRight: 5,
  },
  buttonText: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
};

export default Button;
