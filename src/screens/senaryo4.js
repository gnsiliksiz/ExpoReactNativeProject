import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';


const App = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
   
    loadSelectedLocation();
  }, []);

  const loadSelectedLocation = async () => {
    try {
      const storedLocation = await AsyncStorage.getItem('selectedLocation');
  
      if (storedLocation) {
        const parsedLocation = JSON.parse(storedLocation);
        setSelectedLocation(parsedLocation);
      } else {
        setSelectedLocation({
          longitude: 34.916872568428516,
          latitude: 39.06778650428533
        });
      }
    } catch (error) {
      console.log('Error loading location:', error);
    }
  };
  

  const saveSelectedLocation = async (location) => {
    try {
      await AsyncStorage.setItem('selectedLocation', JSON.stringify(location));
    } catch (error) {
      console.log('Error saving location:', error);
    }
  };

  const handleMapPress = (event) => {
    const { coordinate } = event.nativeEvent;
    setSelectedLocation(coordinate);
    saveSelectedLocation(coordinate);
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} onPress={handleMapPress} initialRegion={selectedLocation}>
        {selectedLocation && (
          <Marker coordinate={selectedLocation} title="Selected location" draggable />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default App;
