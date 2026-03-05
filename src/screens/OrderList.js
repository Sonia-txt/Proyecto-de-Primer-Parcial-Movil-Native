import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

export default function OrdersList({ navigation, ordersList, route }) {
  return (
    <ImageBackground 
      source={require('../../assets/1.jpeg')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>ORDERS</Text>
        
        <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
          {ordersList.map((item) => (
            <View key={item.id} style={styles.card}>
              <Text style={styles.cardText}> {item.type} ({item.size}) - Cant: {item.amount}</Text>
            </View>
          ))}
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
    paddingTop: 80 
  },
  title: { 
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333'
  },
  card: { 
    backgroundColor: 'rgba(242, 242, 242, 0.9)', 
    width: '85%',
    padding: 20,
    marginBottom: 15,
    borderRadius: 8,
    elevation: 3
  },
  cardText: { 
    fontSize: 16,
    fontWeight: '500'
  },
  exitBtn: { 
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