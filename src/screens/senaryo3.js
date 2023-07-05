import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const Senaryo3 = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    if (taskText.trim() !== '') {
      const taskWords = taskText.trim().split(' ');
      taskWords.forEach((word) => {
        const newTask = { id: Date.now().toString(), text: word, completed: false };
        setTasks((prevTasks) => [...prevTasks, newTask]);
      });
      setTaskText('');
    }
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={[styles.taskItem, item.completed && styles.completedTaskItem]}
        onPress={() => toggleTaskCompletion(item.id)}
        onLongPress={() => deleteTask(item.id)}
      >
        <Text style={[styles.taskText, item.completed && styles.completedTaskText]}>
          {item.text}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Yeni görev ekle"
          value={taskText}
          onChangeText={(text) => setTaskText(text)}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={addTask}>
          <Text style={styles.buttonText}>Ekle</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.taskList}
        ListEmptyComponent={<Text style={styles.emptyText}>Liste boş</Text>}
      />
    </View>
  );
};


export default Senaryo3;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#4287f5',
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  taskList: {
    marginTop: 10,
  },
  taskItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  completedTaskItem: {
    backgroundColor: '#f9f9f9',
  },
  taskText: {
    fontSize: 16,
  },
  completedTaskText: {
    textDecorationLine: 'line-through',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
  },
  clearButton: {
    marginTop: 20,
    backgroundColor: '#f44336',
    paddingVertical: 10,
    borderRadius: 4,
  },
  clearButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


