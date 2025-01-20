import React from 'react';
import { View, Text, ScrollView,TouchableOpacity, StyleSheet } from 'react-native';

const DashboardItem = ({ title, value ,onPress}) => {
  return(
    <TouchableOpacity onPress={onPress} style={styles.dashboardItem}>
    <Text style={styles.dashboardTitle}>{title}</Text>
    <Text style={styles.dashboardValue}>{value}</Text>
  </TouchableOpacity>
  );
  
  };
  const Dashboard = () => {
    const handleFeaturePress = () => {
      // Implement your navigation or action here
    };
  
    const handleWidgetPress = (widgetId) => {
      // Implement your navigation or action based on the widgetId
    };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Dashboard</Text>
        
      </View>
      
      
      <View style={styles.cornerDashboardContainer}>
        <DashboardItem title="=" onPress={handleFeaturePress}/>
      </View>
      <View style={styles.widgetsContainer}>
        <TouchableOpacity
          style={styles.widget}
          onPress={() => handleWidgetPress(1)}>
          <Text>Account Summary</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.widget}
          onPress={() => handleWidgetPress(2)}
        >
          <Text>Transfer Services</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.widget}
          onPress={() => handleWidgetPress(3)}
        >
          <Text>Payment Services</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.widget}
          onPress={() => handleWidgetPress(4)}
        >
          <Text>Pawning Services</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.widget}
          onPress={() => handleWidgetPress(5)}
        >
            <Text>Cheque Services</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.widget}
          onPress={() => handleWidgetPress(6)}
          >
              <Text>Bnak Rate </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.widget}
          onPress={() => handleWidgetPress(6)}
          >
          <Text>Calculator </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.widget}
          onPress={() => handleWidgetPress(6)}
        >
            <Text>Loacation</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.widget}
          onPress={() => handleWidgetPress(6)}
          >
          
          <Text>Setting</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#2ad6b5',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
   
  },
  cornerDashboardContainer: {
    position: 'absolute',
    bottom:670,
    left: 20,
    
  },
  dashboardItem: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding:10,
    marginBottom: 0,
  },
  dashboardTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 0.5,
  },
  dashboardValue: {
    fontSize: 0.1,
  },
  widgetsContainer: {
    
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  widget: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: 'black',
    alignItems:'center',
  },
});

export default Dashboard;