import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './start';
import LoginScreen from './login';
import HomeScreen from './Home';
import SignUpScreen from './sign';
import AccountSummary from './account'; // Update with the actual path to your AccountSummary component
import TransferServices from './transfer'; // Import the TransferServices component
import PaymentServices from './payment'; 

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="sign" component={SignUpScreen} />
        <Stack.Screen name="AccountSummary" component={AccountSummary} />
        <Stack.Screen name="transfer" component={TransferServices} />
        <Stack.Screen name="payment" component={PaymentServices} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;