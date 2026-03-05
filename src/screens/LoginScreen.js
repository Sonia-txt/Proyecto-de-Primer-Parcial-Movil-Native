import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert, Image } from 'react-native';

const USERS = [
    { user: 'Admin', pass: '123' },
    { user: 'Maribel', pass: '456' },
    { user: 'Sonia', pass: '789' }
];

export default function LoginScreen({ onLogin }) {
    const [u, setU] = useState('');
    const [p, setP] = useState('');

 const handleLogin = () => {
    const found = USERS.find(user => user.user === u && user.pass === p);
    if (found) {
        onLogin(found.user); 
    } else {
        Alert.alert("Error", "Usuario o contraseña incorrectos");
    }
};

    return (
        <View style={styles.container}>
            <Text style={styles.title}>BIENVENIDO A{"\n"}PIZZERIA TECNM</Text>
            <View style={styles.logoContainer}>
                <Image source={require('../../assets/img1.jpg')} style={styles.logo} />
            </View>
            <Text style={styles.label}>Inicia sesión</Text>
            <TextInput placeholder="USER" style={styles.input} onChangeText={setU} />
            <TextInput placeholder="PASSWORD" secureTextEntry style={styles.input} onChangeText={setP} />
            <TouchableOpacity style={styles.btnEntrar} onPress={handleLogin}>
                <Text>ENTRAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.exitBtnSmall}>
                <Text style={styles.exitText}>EXIT</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
      flex: 1,
       justifyContent: 'center',
        alignItems: 'center',
         backgroundColor: '#e1a6b3',
          padding: 30 
        },
    title: {
       textAlign: 'center',
        fontSize: 22, 
        fontWeight: 'bold',
         marginBottom: '20'
         },
    logoContainer: { 
      width: 120, 
      height: 120, 
      backgroundColor: '#030203', 
      borderRadius: 25,
       justifyContent: 'center',
        alignItems: 'center',
         marginBottom: 20 
        },
    logo: { 
      width: 100,
       height: 100,
        resizeMode: 'contain'
       },
    label: {
       marginBottom: 10
      },
    input: { backgroundColor: '#f4f4f4',
       width: '90%',
        padding: 10,
         marginBottom: 15, 
         textAlign: 'center'
         },
    btnEntrar: { 
      backgroundColor: '#b4c7e7',
       padding: 12,
        width: '40%',
         alignItems: 'center',
          marginTop: 10 
        },
    exitBtnSmall: {
       position: 'absolute',
        bottom: 40,
         right: 40,
          backgroundColor: '#f8a08c',
           padding: 5, 
           borderRadius: 10 },
    exitText: { 
      fontSize: 10 
    }
});