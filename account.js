import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const AccountSummary = ({ balance, lastTransaction, onViewTransactionsPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Account Summary</Text>
      </View>
      <Text style={styles.subTitle}>Welcome to Account Summary</Text>
      <Text style={styles.userName}>K.D.T.Madhurangi</Text>
      <View style={styles.summaryContainer}>
        <Text style={styles.balance}>Balance: Rs.20000.00 {balance}</Text>
        <Text style={styles.lastTransaction}>Last Transaction: Rs.4000.00 {lastTransaction}</Text>
      </View>
      <TouchableOpacity
        style={styles.viewTransactionsButton}
        onPress={onViewTransactionsPress}>
        <Text style={styles.viewTransactionsButtonText}>View Transactions</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 40,
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
    marginBottom: 15,
 
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  userName: {
    fontSize: 16,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  summaryContainer: {
    marginBottom: 30,
  },
  balance: {
    fontSize: 16,
    marginBottom: 20,
  },
  lastTransaction: {
    fontSize: 16,
  },
  viewTransactionsButton: {
    backgroundColor: '#2ad6b5',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  viewTransactionsButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AccountSummary;