import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const StartScreen = () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
            <Image source={require('./assets/w.jpg')} style={styles.backgroundImage} />
      <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>Welcome to Bank and Finance</Text>
      </TouchableOpacity>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightcyan',
    padding: 20,
  },
  backgroundImage: {
    position: 'absolute',
    width: '120%',
    height: '110%',
    resizeMode: 'cover',
  },
  button: {
    backgroundColor: '#E6E6FA',
    paddingHorizontal: 40,
    paddingVertical: 30,
    borderRadius: 15,
    marginBottom: 30,
  },
  image1: {
    resizeMode: 'contain',
    marginBottom: 8,
  },
  buttonText: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default StartScreen;
