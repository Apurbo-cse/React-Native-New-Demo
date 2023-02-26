import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

import MainNavigationString from '../MainNavigationString';
import HomeScreen from '../../screens/HomeScreen';
import LivechatScreen from '../../screens/live_chat/LivechatScreen';
import LiveChatAllScreen from '../../screens/live_chat/LiveChatAllScreen';
import DetailsCard from '../../components/common/DetailsCard';
import LiveChatDetailsScreen from '../../screens/live_chat/LiveChatDetailsScreen';
import LiveChatCreateScreen from '../../screens/live_chat/LiveChatCreateScreen';

const Stack = createSharedElementStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={MainNavigationString.HOME}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={MainNavigationString.LIVECHAT}
        component={LivechatScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={MainNavigationString.LIVECHATCREATE}
        component={LiveChatCreateScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={MainNavigationString.LIVECHATALL}
        component={LiveChatAllScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="MainNavigationString.LIVECHATDETAILS"
        component={LiveChatDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
