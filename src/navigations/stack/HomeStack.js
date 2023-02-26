import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import HomeScreen from '../../screens/HomeScreen';
import MainNavigationString from '../MainNavigationString';

const Stack = createSharedElementStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={MainNavigationString.HOME}
        component={HomeScreen}
        options={{
          headerShown: false,
          useNativeDriver: true,
        }}
      />
    </Stack.Navigator>
  );
}
