import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function UsScreen({ navigation, route }) {
  const currentUser = route.params?.user || route.params?.username;

  return (
    <ImageBackground 
      source={require('../../assets/2.jpeg')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>US</Text>
        
        <ScrollView style={styles.infoBox}>
          <Text style={styles.companyName}>PIZZERIA 011</Text>
          <Text style={styles.description}>
            Somos una empresa dedicada a crear las mejores pizzas con sabor artesanal y rapidez digital. 
            Nacimos para alimentar el talento de nuestra comunidad estudiantil.
          </Text>
          
          <View style={styles.contactContainer}>
            <Text style={styles.contactTitle}>CONTACT:</Text>
            <Text style={styles.contactText}>contacto@pizzeriatecnm.com</Text>
            <Text style={styles.contactText}>477-123-4567</Text>
          </View>
        </ScrollView>

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
    justifyContent: 'center', 
    padding: 20
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold', 
    marginBottom: 20,
    marginTop: 50
  },
  infoBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.64)',
    width: '90%', 
    padding: 20,
    borderRadius: 15,
    maxHeight: 250 
  },
  companyName: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10, 
    color: '#a04000' 
  },
  description: { 
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 22,
    color: '#333'
  },
  contactContainer: {
    marginTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#d35400',
    paddingTop: 10
  },
  contactTitle: { 
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5 
  },
  contactText: {
    fontSize: 13,
    color: '#555' 
  },
  exitBtn: { 
    marginTop: 40,
    backgroundColor: '#f8a08c',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 12 
  },
  exitText: { 
    fontSize: 12, 
    fontWeight: 'bold' 
  }
});