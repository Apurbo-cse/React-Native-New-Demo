import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DetailsCard from '../../components/common/DetailsCard';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const LiveChatDetailsScreen = ({navigation, route}) => {
  const insets = useSafeAreaInsets();
  const {trip} = route.params;
  return (
    <View>
      <DetailsCard trip={trip} />
    </View>
  );
};

export default LiveChatDetailsScreen;

const styles = StyleSheet.create({});
