import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import HomeScreen from '../../screens/HomeScreen';

const Stack = createSharedElementStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          useNativeDriver: true,
        }}
      />
    </Stack.Navigator>
  );
}
