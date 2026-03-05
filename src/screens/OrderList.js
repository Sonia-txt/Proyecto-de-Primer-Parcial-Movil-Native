import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function OrdersList({ navigation, ordersList }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ORDERS</Text>
      <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
        {ordersList.map((item) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.cardText}> {item.type} ({item.size}) - Cant: {item.amount}</Text>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.exitBtn} onPress={() => navigation.navigate('Home')}><Text style={styles.exitText}>EXIT</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
  flex: 1,
  backgroundColor: '#e1a6b3',
  alignItems: 'center',
  paddingTop: 80 
},
  title: { 
  fontSize: 26,
  fontWeight: 'bold',
  marginBottom: 40 },
  card: { backgroundColor: '#f2f2f2',
  width: '85%',
  padding: 20,
  marginBottom: 15,
  borderRadius: 8 },
  cardText: { 
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
    fontWeight: 'bold' }
});