import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Alert, 
  Keyboard, 
  TouchableWithoutFeedback 
} from 'react-native';

const VALID_PIZZAS = [
  'HAWAIANA', 'CUBANA', 'PEPERONI', 'VEGETARIANA', 
  'MEXICANA', 'ESPECIAL', '4 QUESOS', 'POLLO', 
  'CARNE', 'MAR Y TIERRA', 'BARBACOA'
];

export default function OrderScreen({ navigation, onSave, route }) {
  const [type, setType] = useState('');
  const [size, setSize] = useState('');
  const [amount, setAmount] = useState('');

  const currentUser = route.params?.user || route.params?.username;

  const handleSave = () => {
    if (!type || !size || !amount) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    const pizzaInput = type.trim().toUpperCase();
    const sizeInput = size.trim().toUpperCase();

    if (!VALID_PIZZAS.includes(pizzaInput)) {
      Alert.alert("Invalid Pizza", "That pizza is not on the menu.");
      return;
    }

    if (sizeInput !== 'CH' && sizeInput !== 'G') {
      Alert.alert("Invalid Size", "Use 'CH' or 'G'.");
      return;
    }
    
    onSave({ type: pizzaInput, size: sizeInput, amount });

    Alert.alert("Success", "Order saved successfully", [
      { 
        text: "OK", 
        onPress: () => {
          setType('');
          setSize('');
          setAmount('');
          Keyboard.dismiss();
        } 
      }
    ]);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.title}>ORDER</Text>
        
        <TextInput 
          placeholder="TYPE" 
          style={styles.input} 
          onChangeText={setType} 
          value={type} 
          autoCapitalize="characters"
        />
        <TextInput 
          placeholder="SIZE (CH / G)" 
          style={styles.input} 
          onChangeText={setSize} 
          value={size} 
          autoCapitalize="characters"
        />
        <TextInput 
          placeholder="AMOUNT" 
          style={styles.input} 
          keyboardType="numeric" 
          onChangeText={setAmount} 
          value={amount} 
        />
        
        <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
          <Text style={styles.saveText}>SAVE</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.exitBtn} 
          onPress={() => {
            if (currentUser) {
              navigation.navigate('MainMenu', { username: currentUser });
            } else {
              navigation.goBack();
            }
          }}
        >
          <Text style={styles.exitText}>EXIT</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
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
    marginBottom: 40 
  },
  input: {
    backgroundColor: '#f4f4f4',
    width: '80%',
    padding: 12,
    marginBottom: 25,
    textAlign: 'center'
  },
  saveBtn: { 
    backgroundColor: '#8ea9db',
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