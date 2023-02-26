import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import MainHeader from '../components/MainHeader';
import {colors} from '../constants/theme';
import HomeCard from '../components/common/HomeCard';
import imagePath from '../constants/imagePath';
import MainNavigationString from '../navigations/MainNavigationString';

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

      <View style={{height: 700, backgroundColor: colors.Background}}>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            top: -100,
          }}>
          <HomeCard
            action={MainNavigationString.LIVECHAT}
            icon={imagePath.iconLiveChat}
            title={'Live Chat'}
          />
          <HomeCard
            action={MainNavigationString.LIVECHAT}
            icon={imagePath.iconQna}
            title={'Question & answer'}
            color={'redis'}
          />
        </View>
      </View>
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
