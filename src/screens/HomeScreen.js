import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainHeader from '../components/MainHeader';
import ScreenHeader from '../components/ScreenHeader';
import TopPlacesCarousel from '../components/TopPlacesCarousel';
import SectionHeader from '../components/SectionHeader';
import TripsList from '../components/TripsList';
import {PLACES, TOP_PLACES} from '../data';
import {colors} from '../constants/theme';

const HomeScreen = () => {
  return (
    <ScrollView
      style={[
        styles.container,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          flexDirection: 'column',
          height: 200,
        },
      ]}>
      <MainHeader />

      <View style={{ height: 700, backgroundColor: colors.Background }} >

      <View style={{ flexDirection: "row", justifyContent: 'space-around', flexWrap: 'wrap', top: -100 }}>
      </View>
    </View>    

      <ScreenHeader mainTitle="Find Your" secondTitle="Dream Trip" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopPlacesCarousel list={TOP_PLACES} />
        <SectionHeader
          title="Popular Trips"
          buttonTitle="See All"
          onPress={() => {}}
        />
        <TripsList list={PLACES} />
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 400,
    margin: 0,
    padding: 0,
    backgroundColor: colors.Background,
  },
  card: {
    height: 120,
    width: '45%',
    backgroundColor: 'red',
    borderRadius: 10,
  },
  topHader: {
    height: 300,
    width: '100%',
    margin: 0,
    padding: 0,
    backgroundColor: colors.Background,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
