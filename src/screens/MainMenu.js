import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function MainMenu({ navigation, route, onLogout }) {
  const { username } = route.params || { username: '' }; 

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/img2.jpg')} style={styles.bgIcon} />
      
      <Text style={styles.header}>MAIN MENU</Text>
      
      {username === 'Admin' && (
        <TouchableOpacity 
          style={styles.btnBlue} 
          onPress={() => navigation.navigate('OrdersList')}
        >
          <Text style={styles.btnText}>Employed</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity 
        style={styles.btnBlue} 
        onPress={() => navigation.navigate('Customer')}
      >
        <Text style={styles.btnText}>Customer</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.btnBlue} 
        onPress={() => navigation.navigate('Us')}
      >
        <Text style={styles.btnText}>US</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.exitBtnCenter} onPress={onLogout}>
        <Text style={styles.exitText}>EXIT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#e1a6b3' },
  bgIcon: { 
    width: 80,
     height: 80,
      marginBottom: 20 
    },
  header: { 
    fontSize: 24,
    fontWeight: 'bold',
     marginBottom: 50
     },
  btnBlue: { 
    backgroundColor: '#b4c7e7', 
    padding: 15, 
    width: '60%', 
    alignItems: 'center',
     borderRadius: 15,
      marginBottom: 25
     },
  btnText: {
     fontWeight: 'bold',
      color: '#333' 
    },
  exitBtnCenter: {
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