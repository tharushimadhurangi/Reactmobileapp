import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FeatureBox = ({ imageSource, title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.featureBox}>
      <Image source={imageSource} style={styles.featureImage} />
      <Text style={styles.featureTitle}>{title}</Text>
    </TouchableOpacity>
  );
};
const DashboardItem = ({ title, value ,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.dashboardItem}>
    <Text style={styles.dashboardTitle}>{title}</Text>
    <Text style={styles.dashboardValue}>{value}</Text>
  </TouchableOpacity>
  );
};

const HomeScreen = () => {
  const navigation = useNavigation(); // Initialize navigation

    const handleFeaturePress = () => {
    navigation.navigate('AccountSummary'); // Navigate to 'AccountSummary' screen
    // Implement your navigation or action here
  };
  const handleTransferPress = () => {
    navigation.navigate('transfer');
  };
  const handlePaymentPress = () => {
    navigation.navigate('payment');
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Bank and Finance</Text>
      <View style={styles.cornerDashboardContainer}>
        <DashboardItem title="=" onPress={handleFeaturePress}
 />

        {/* Add more corner dashboard items here */}
      </View>
      <View style={styles.featureContainer}>
        <FeatureBox
          imageSource={require('./assets/Untitled.png')}
          title="Account Summmery"
          onPress={handleFeaturePress}
        />
        <FeatureBox
          imageSource={require('./assets/transfer.jpeg')}
          title="Transfer Services"
          onPress={handleTransferPress}
          />
          <FeatureBox
          imageSource={require('./assets/payment.jpeg')}
          title="Pyment Services"
          onPress={handlePaymentPress}
          />
         <FeatureBox
          imageSource={require('./assets/cheaque.jpeg')}
          title="Cheque Services"
          onPress={handleFeaturePress}
          />
          <FeatureBox
          imageSource={require('./assets/m.jpeg/')}
          title="Pawing Services"
          onPress={handleFeaturePress}
          />
          <FeatureBox
          imageSource={require('./assets/calculating.jpeg')}
          title="Personal Calculator"
          onPress={handleFeaturePress}
        />
        <FeatureBox
          imageSource={require('./assets/setting.jpeg')}
          title="Setting "
          onPress={handleFeaturePress}
        />
        {/* Add more FeatureBox components here */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'aquamarine',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  featureContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  cornerDashboardContainer: {
    position: 'absolute',
    bottom: 650, // Adjust the bottom value to position the dashboard items vertically
    left: 20, // Adjust the left value to position the dashboard items horizontally
  },

  dashboardItem: {
    alignItems: 'center',
    borderWidth:1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding:10,
    marginBottom: 1,
},
dashboardTitle: {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 0.5,
},
dashboardValue: {
  fontSize: 0.1,
},
  featureBox: {
    width: '48%', // Adjust this value to control the width of each feature box
    marginBottom: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    alignItems: 'center',
  },
  featureImage: {
    width: 140,
    height: 100,
    marginBottom: 10,
  },
  featureTitle: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default HomeScreen;