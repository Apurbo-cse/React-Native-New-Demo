import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {StatusBar} from 'react-native/types';
// import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import TripDetailsScreen from '../screens/TripDetailsScreen';
import LivechatScreen from '../screens/live_chat/LivechatScreen';




// const Stack = createStackNavigator();

const Stack = createSharedElementStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      {/* <StatusBar hidden /> */}
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={TabNavigator}
          options={{
            headerShown: false,
            useNativeDriver: true,
          }}
        />

        <Stack.Screen
          name="liveChat"
          component={LivechatScreen}
          options={{
            headerShown: false,
            useNativeDriver: true,
          }}
        />

        <Stack.Screen
          name="TripDetails"
          component={TripDetailsScreen}
          options={{
            headerShown: false,
            useNativeDriver: true,
            cardStyleInterpolator: ({current: {progress}}) => ({
              cardStyle: {
                opacity: progress,
              },
            }),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
