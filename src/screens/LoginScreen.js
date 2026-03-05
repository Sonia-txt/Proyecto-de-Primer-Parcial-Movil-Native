import React, { useState } from 'react';
import { 
    View, 
    TextInput, 
    TouchableOpacity, 
    Text, 
    StyleSheet, 
    Alert, 
    Image, 
    BackHandler, 
    Platform,
    ImageBackground 
} from 'react-native';

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

    const handleExit = () => {
        Alert.alert("Exit", "Do you want to close the app?", [
            { text: "No", style: "cancel" },
            { 
                text: "Yes", 
                onPress: () => {
                    if (Platform.OS === 'ios') {
                        Alert.alert("Notice", "Please close the app manually on your iPhone.");
                    } else {
                        BackHandler.exitApp();
                    }
                } 
            }
        ]);
    };

    return (
        <ImageBackground 
            source={require('../../assets/3.jpeg')} 
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <Text style={styles.title}>WELCOME TO{"\n"}PIZZERIA DELIVERY</Text>
                
                
                <Text style={styles.label}>login</Text>
                
                <TextInput 
                    placeholder="USER" 
                    style={styles.input} 
                    onChangeText={setU} 
                    value={u}
                />
                <TextInput 
                    placeholder="PASSWORD" 
                    secureTextEntry 
                    style={styles.input} 
                    onChangeText={setP} 
                    value={p}
                />
                
                <TouchableOpacity style={styles.btnEntrar} onPress={handleLogin}>
                    <Text style={styles.btnText}>OPEN</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.exitBtnSmall} onPress={handleExit}>
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(225, 166, 179, 0.6)', 
        padding: 30 
    },
    title: {
        textAlign: 'center',
        fontSize: 26, 
        fontWeight: 'bold',
        marginBottom: 40,
        color: '#333'
    },
    label: {
        marginBottom: 10,
        fontWeight: 'bold'
    },
    input: { 
        backgroundColor: 'rgba(244, 244, 244, 0.9)', 
        width: '90%',
        padding: 15,
        marginBottom: 15, 
        textAlign: 'center',
        borderRadius: 10
    },
    btnEntrar: { 
        backgroundColor: '#b4c7e7',
        padding: 15,
        width: '50%',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 15,
        elevation: 3
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    exitBtnSmall: {
        position: 'absolute',
        bottom: 50,
        right: 40,
        backgroundColor: '#f8a08c',
        paddingVertical: 8, 
        paddingHorizontal: 15,
        borderRadius: 10 
    },
    exitText: { 
        fontSize: 12,
        fontWeight: 'bold'
    }
});