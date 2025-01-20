import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({  }) => {
    const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate('Home');
  };
  const handleForgotPassword =() => {

  }
  const handleSignUp =() =>{
    navigation.navigate(sign);
  }

  return (
    <View style={styles.container}>
<Text style ={styles.header}>BANK AND FINANCE</Text>
<Image source ={require('./assets/Untitled.png')}style={styles.image1}/>
      <Text style={styles.header}>Login</Text>
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <Button title="Login" onPress={handleLogin} color="#007AFF" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
 
  },
  input: {
    width: '80%',
    height: 40,
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default LoginScreen;
