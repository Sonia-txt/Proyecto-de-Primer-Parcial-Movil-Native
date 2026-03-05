import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function PizzaMenu({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MENU</Text>
      
      <View style={styles.menuBox}>
        <Text style={styles.item}>HAWAIANA.......... $120CH  $150G</Text> 
        <Text style={styles.item}>CUBANA............... $120CH  $150G</Text>
        <Text style={styles.item}>PEPERONI........... $120CH  $160G</Text>
        <Text style={styles.item}>VEGETARIANA....... $120CH  $150G</Text>
        <Text style={styles.item}>MEXICANA........... $120CH  $150G</Text>
        <Text style={styles.item}>ESPECIAL............. $120CH  $150G</Text>
        <Text style={styles.item}>4 QUESOS............. $120CH  $150G</Text>
        <Text style={styles.item}>POLLO................. $120CH  $150G</Text>
        <Text style={styles.item}>CARNE.................. $120CH  $150G</Text>
        <Text style={styles.item}>MAR Y TIERRA....... $120CH  $150G</Text>
        <Text style={styles.item}>BARBACOA............. $120CH  $150G</Text>
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
    paddingTop: 100 
  },
  title: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    marginBottom: 40 
  },
  menuBox: { 
    backgroundColor: '#eadbe6', 
    width: '85%', 
    padding: 25, 
    borderRadius: 5 
  },
  item: { 
    fontSize: 15, 
    marginBottom: 25, 
    fontWeight: '500',
    fontFamily: 'monospace' 
  },
  exitBtn: { 
    position: 'absolute', 
    bottom: 50, 
    backgroundColor: '#f8a08c', 
    paddingVertical: 10, 
    paddingHorizontal: 25, 
    borderRadius: 12 
  },
  exitText: { 
    fontSize: 12, 
    fontWeight: 'bold' 
  }
});