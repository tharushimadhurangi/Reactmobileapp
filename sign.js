import React, { useState } from 'react';
import { View, Text, TextInput, Image,Alert,TouchableOpacity, StyleSheet } from 'react-native';

const SignUpScreen = () => {
  

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [ComfremPassword, setComfremPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSignUp = () => {
    // Implement sign-up logic here
    Alert.alert('Sign Up Successful', 'You have successfully signed up!', [
      { text: 'OK', onPress: () => console.log('OK Pressed') }
    ]);
  };
 

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
      
        <Text style={styles.header}>Bank And Finance</Text>
        
      </View>

      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        keyboardType="numeric"
        value={mobileNumber}
        onChangeText={setMobileNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={ComfremPassword}
        onChangeText={setComfremPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>  
     </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#7FFFD4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50,
 
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
 
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'black',
    borderWidth: 3,
    marginBottom: 20,
    padding: 10,
    borderRadius: 15,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignUpScreen;

