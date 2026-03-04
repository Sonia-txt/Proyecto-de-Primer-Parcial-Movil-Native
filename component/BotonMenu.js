import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const BotonMenu = ({ title, onPress }) => (
  <TouchableOpacity style={styles.btn} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  btn: {
     backgroundColor: '#b4c7e7',
     padding: 15,
     width: '70%',
     alignItems: 'center',
     borderRadius: 12,
     marginBottom: 15 },
  text: {
     fontWeight: 'bold',
     color: '#333' 
    }
});