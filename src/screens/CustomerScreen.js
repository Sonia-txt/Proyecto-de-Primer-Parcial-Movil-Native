import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CustomerScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WELCOME TO THE PIZZA DELIVERY</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.blueBtn} 
          onPress={() => navigation.navigate('PizzaMenu')}
        >
          <Text style={styles.btnText}>MENU</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.blueBtn} 
          onPress={() => navigation.navigate('Order')}
        >
          <Text style={styles.btnText}>PLACE ORDER</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={styles.exitBtn} 
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.exitText}>EXIT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1, 
     backgroundColor: '#e1a6b3',
      alignItems: 'center', 
      justifyContent: 'center' 
    },
  title: { 
    fontSize: 26,
     fontWeight: 'bold',
      marginBottom: 50 
    },
  buttonContainer: {
     width: '100%', 
     alignItems: 'center'
     },
  blueBtn: {
     backgroundColor: '#b4c7e7',
      padding: 20, width: '70%',
       alignItems: 'center', 
       borderRadius: 15,
        marginBottom: 25
       },
  btnText: {
     fontWeight: 'bold',
      color: '#333', 
      fontSize: 16
     },
  exitBtn: {
     position: 'absolute',
      bottom: 50, 
      backgroundColor: '#f8a08c', 
      padding: 10,
       borderRadius: 12 
      },
  exitText: { 
    fontSize: 12,
     fontWeight: 'bold'
     }
});