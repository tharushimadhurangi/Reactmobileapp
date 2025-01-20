import React from 'react';
import { View, Text,Image, TouchableOpacity, StyleSheet } from 'react-native';

const TransferServices = ({ onTransferPress,  }) => {

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.header}>
          
          <Text style={styles.headerText}>Transfer Services</Text>
        </View>
     </View>
      <View style={styles.container}>
        <Text style={styles.title}>Fund transfer    <Image source={require('./assets/fund.jpeg')} style={styles.image1} /></Text>
     
        <Text style={styles.description}>Transfer fund to a bank account    .</Text>
    
        <TouchableOpacity
          style={styles.transferButton}
          onPress={onTransferPress}>
          <Text style={styles.transferButtonText}>Transfer Now   </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Interbank Fund Transfer    <Image source={require('./assets/i.jpeg')} style={styles.image1} /></Text>
        <Text style={styles.description}> Transfer to other local Bank account.</Text>
        <TouchableOpacity
          style={styles.transferButton}
          onPress={onTransferPress}>
          <Text style={styles.transferButtonText}>Transfer Now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}> Branch To Branch Transfer     <Image source={require('./assets/b.png')} style={styles.image1} /></Text>
        <Text style={styles.description}>Transfer to a non account holding person</Text>
        <TouchableOpacity
          style={styles.transferButton}
          onPress={onTransferPress}>
          <Text style={styles.transferButtonText}>Transfer Now</Text>
        </TouchableOpacity>
      </View>
    
     
      {/* Other similar container views */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightcyan',
    borderRadius: 30,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    elevation: 5,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
    color: '#333',
  },

  backIcon: {
    marginRight: 20,
  },

  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  
  description: {
    fontSize: 16,
    marginBottom: 9,
  },
  
  transferButton: {
    backgroundColor: '#2ad6b5',
    borderRadius: 8,
    padding: 6,
    alignItems: 'center',
  },

image1: {
  width:50,
  height: 50,
  resizeMode: 'contain',
  marginBottom: 8,
  
},
  transferButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default TransferServices;