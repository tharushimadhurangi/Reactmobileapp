import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PaymentServices= ({ onTransferPress, }) => {

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Payment Services</Text>
        </View>
     </View>
      <View style={styles.container}>
        <Text style={styles.title}>Bill Payment  </Text>
     
    
        <TouchableOpacity
          style={styles.transferButton}
          onPress={onTransferPress}>
          <Text style={styles.transferButtonText}>Pay Now   </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Favourute Bill Payment</Text>
        <TouchableOpacity
          style={styles.transferButton}
          onPress={onTransferPress}>
          <Text style={styles.transferButtonText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}> Bill Payment History     </Text>
        <TouchableOpacity
          style={styles.transferButton}
          onPress={onTransferPress}>
          <Text style={styles.transferButtonText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Loan Payment    </Text>
        <TouchableOpacity
          style={styles.transferButton}
          onPress={onTransferPress}>
          <Text style={styles.transferButtonText}>Pay Now</Text>
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

  transferButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default PaymentServices;