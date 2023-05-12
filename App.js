import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ScreenA from './components/screen-A';
import ScreenB from './components/screen-B';
import ScreenC from './components/screen-c';
import ScreenD from './components/screen-D';

const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="A" component={ScreenA} />
        <Tab.Screen name="B" component={ScreenB} />
        <Tab.Screen name="C" component={ScreenC} />
        <Tab.Screen name="D" component={ScreenD} />
      </Tab.Navigator>   
    </NavigationContainer>
  );
};

export default App;
