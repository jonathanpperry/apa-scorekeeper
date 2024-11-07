// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import HomeScreen from './HomeScreen';
import EightBallScreen from './EightBall';
import NineBallScreen from './NineBall';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="EightBall" component={EightBallScreen} />
          <Stack.Screen name="NineBall" component={NineBallScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
