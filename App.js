import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Senaryo1 from './src/screens/senaryo1';
import Senaryo2  from './src/screens/senaryo2';
import Senaryo3 from './src/screens/senaryo3';
import Senaryo4 from './src/screens/senaryo4';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Senaryo1">
        <Tab.Screen name="Senaryo1" component={Senaryo1} />
        <Tab.Screen name="Senaryo2" component={Senaryo2} />
        <Tab.Screen name="Senaryo3" component={Senaryo3} />
        <Tab.Screen name="Senaryo4" component={Senaryo4} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
