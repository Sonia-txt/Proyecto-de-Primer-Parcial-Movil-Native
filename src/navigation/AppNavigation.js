import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import MainMenu from '../screens/MainMenu';
import PizzaMenu from '../screens/PizzaMenu';
import OrderScreen from '../screens/OrderScreen';
import OrdersList from '../screens/OrderList';
import UsScreen from '../screens/UsScreen';
import CustomerScreen from '../screens/CustomerScreen';

const Stack = createStackNavigator();

export default function AppNavigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userLogged, setUserLogged] = useState('');
  
  const [orders, setOrders] = useState([
     ]);

  const handleLoginSuccess = (name) => {
    setUserLogged(name);
    setIsLoggedIn(true);
  };

  const addOrder = (newOrder) => {
    setOrders([...orders, { ...newOrder, id: Math.random().toString() }]);
  };

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isLoggedIn ? (
        <Stack.Screen name="Login">
          {(props) => <LoginScreen {...props} onLogin={handleLoginSuccess} />}
        </Stack.Screen>
      ) : (
        <>
          <Stack.Screen name="Home">
            {(props) => (
              <MainMenu 
                {...props} 
                route={{ params: { username: userLogged } }} 
                onLogout={() => {
                  setIsLoggedIn(false);
                  setUserLogged('');
                }} 
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="MainMenu" component={MainMenu} />
          <Stack.Screen name="PizzaMenu" component={PizzaMenu} />
          <Stack.Screen name="Order">
            {(props) => <OrderScreen {...props} onSave={addOrder} />}
          </Stack.Screen>
          <Stack.Screen name="OrdersList">
            {(props) => <OrdersList {...props} ordersList={orders} />}
          </Stack.Screen>
          <Stack.Screen name="Us" component={UsScreen} />
          <Stack.Screen name="Customer" component={CustomerScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}