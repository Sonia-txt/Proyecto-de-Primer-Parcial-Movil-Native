import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';

export default function CustomerScreen({ navigation, route }) {
  const currentUser = route.params?.user || route.params?.username;

  return (
    <ImageBackground 
      source={require('../../assets/1.jpeg')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>WELCOME TO THE PIZZA 011</Text>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.blueBtn} 
            onPress={() => navigation.navigate('PizzaMenu', { user: currentUser })}
          >
            <Text style={styles.btnText}>MENU</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.blueBtn} 
            onPress={() => navigation.navigate('Order', { user: currentUser })}
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
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(225, 166, 179, 0.5)',
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
    padding: 20, 
    width: '70%',
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