import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SortableList from 'react-native-sortable-list';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Senaryo2 = () => {
  const [data, setData] = useState([
    { id: '0', text: 'Element 1' },
    { id: '1', text: 'Element 2' },
    { id: '2', text: 'Element 3' },
    { id: '3', text: 'Element 4' },
  ]);

  useEffect(() => {
    const loadSort = async () => {
      try {
        const storedSort = await AsyncStorage.getItem('sort');

        if (storedSort) {
          const parsedSort = JSON.parse(storedSort);
          setData(parsedSort);
        }
      } catch (error) {
        console.log('An error occurred while loading the sequence:', error);
      }
    };

    loadSort();
  }, []);

  const renderRow = ({ data, active }) => {
    return (
      <View style={[styles.row, active && styles.activeRow]}>
        <Text style={styles.text}>{data.text}</Text>
      </View>
    );
  };

  const onChangeOrder = async (nextOrder) => {

    const newData = nextOrder.map((key) => data.find((item) => item.id === key));
    try {
      await AsyncStorage.setItem('sort', JSON.stringify(newData));
    } catch (error) {
      console.log('An error occurred while loading the sequence:', error);
    }
  };

  return (
    <View style={styles.container}>
      <SortableList
        data={data}
        renderRow={renderRow}
        onChangeOrder={onChangeOrder}
        

      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  activeRow: {
    backgroundColor: '#F7F7F7',
  },
  text: {
    fontSize: 16,
  },
});

export default Senaryo2;
