import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

export default function PizzaMenu({ navigation, route }) {
  return (
    <ImageBackground
      source={require('../../assets/1.jpeg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>MENU</Text>

        <View style={styles.menuBox}>
          <ScrollView>
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
          </ScrollView>
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
    paddingTop: 100
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 40
  },
  menuBox: {
    backgroundColor: 'rgba(234, 219, 230, 0.8)',
    width: '85%',
    padding: 25,
    borderRadius: 5,
    maxHeight: '60%'
  },
  item: {
    fontSize: 15,
    marginBottom: 25,
    fontWeight: '500'
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