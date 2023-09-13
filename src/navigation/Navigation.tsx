import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import Home from '../screens/Home';

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Group>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default Navigation;
