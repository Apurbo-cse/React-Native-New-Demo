import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/home/CustomHeader';
import {colors} from '../../constants/theme';
import {useNavigation} from '@react-navigation/native';
import TopMenuHeader from '../../components/TopMenuHeader';
import imagePath from '../../constants/imagePath';

const LivechatScreen = () => {
  const Navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView
        style={{
          flexGrow: 0,
          marginBottom: -100,
          overflow: 'scroll',
          backgroundColor: colors.Background,
        }}
        showsVerticalScrollIndicator={false}>
        <CustomHeader backFunc={() => Navigation.goBack()} tns />
        <TopMenuHeader image={imagePath.iconLiveChat} title={'Live Chat'} />

      </ScrollView>
    </SafeAreaView>
  );
};

export default LivechatScreen;

const styles = StyleSheet.create({

});
