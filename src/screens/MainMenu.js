import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function MainMenu({ navigation, route, onLogout }) {
  const { username } = route.params || { username: '' };

  return (
    <ImageBackground 
      source={require('../../assets/1.jpeg')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        
        <Image source={require('../../assets/2.jpeg')} style={styles.bgIcon} />

        <Text style={styles.header}>MAIN MENU</Text>

        <View style={styles.menuContainer}>
          {username === 'Admin' && (
            <TouchableOpacity
              style={styles.btnBlue}
              onPress={() => navigation.navigate('OrdersList', { user: username })}
            >
              <Text style={styles.btnText}>Employed</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={styles.btnBlue}
            onPress={() => navigation.navigate('Customer', { user: username })}
          >
            <Text style={styles.btnText}>Customer</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnBlue}
            onPress={() => navigation.navigate('Us', { user: username })}
          >
            <Text style={styles.btnText}>US</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.exitBtnCenter} onPress={onLogout}>
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
    height: '100%',
  },
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(225, 166, 179, 0.5)', 
    width: '100%',
  },
  menuContainer: {
    width: '100%',
    alignItems: 'center',
    zIndex: 10, 
  },
  bgIcon: {
    width: 80,
    height: 80,
    marginBottom: 20,
    borderRadius: 40
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#333',
    zIndex: 10
  },
  btnBlue: {
    backgroundColor: '#b4c7e7',
    padding: 15,
    width: '60%',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 25,
    elevation: 5,
    zIndex:  99
  },
  btnText: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: 16
  },
  exitBtnCenter: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: '#f8a08c',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 12,
    zIndex: 20
  },
  exitText: {
    fontSize: 12,
    fontWeight: 'bold'
  }
});