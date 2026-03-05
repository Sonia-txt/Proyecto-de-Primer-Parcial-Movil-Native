import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function OrderScreen({ navigation, onSave }) {
  const [type, setType] = useState('');
  const [size, setSize] = useState('');
  const [amount, setAmount] = useState('');

  const handleSave = () => {
    if (!type || !size || !amount) {
      Alert.alert("Error", "Llena todos los campos");
      return;
    }
    onSave({ type, size, amount });
    Alert.alert("Éxito", "Orden guardada correctamente");
    navigation.navigate('OrdersList');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ORDER</Text>
      
      <TextInput placeholder="TYPE" style={styles.input} onChangeText={setType} value={type} />
      <TextInput placeholder="SIZE" style={styles.input} onChangeText={setSize} value={size} />
      <TextInput placeholder="AMOUNT" style={styles.input} keyboardType="numeric" onChangeText={setAmount} value={amount} />
      
      <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
        <Text style={styles.saveText}>SAVE</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.exitBtn} onPress={() => navigation.goBack()}>
        <Text style={styles.exitText}>EXIT</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, 
    backgroundColor: '#e1a6b3',
    alignItems: 'center',
    justifyContent: 'center' 
    },
  title: { 
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 40 
  },
  input: {
    backgroundColor: '#f4f4f4',
    width: '80%',
    padding: 12,
    marginBottom: 25,
    textAlign: 'center'
  },
  saveBtn: { backgroundColor: '#8ea9db',
    padding: 15,
    width: '35%',
    alignItems: 'center',
    borderRadius: 12 
  },
  saveText: {
    color: 'white',
    fontWeight: 'bold' 
    },
  exitBtn: {
    position: 'absolute', 
    bottom: 50, 
    right: 50,
    backgroundColor: '#f8a08c',
    padding: 8,
    borderRadius: 10
    },
  exitText: {
     fontSize: 12 

  }
});