import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import CardPost from '../../components/common/CardPost';
import {PLACES} from '../../data';
import CustomHeader from '../../components/home/CustomHeader';
import {useNavigation} from '@react-navigation/native';
import imagePath from '../../constants/imagePath';
import {colors} from '../../constants/theme';
import CardHeader from '../../components/common/CardHeader';
import MainNavigationString from '../../navigations/MainNavigationString';

const LiveChatAll = () => {
  const Navigation = useNavigation();
  return (
    <View>
      <SafeAreaView>
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}>
          <CustomHeader backFunc={() => Navigation.goBack()} tns />
          <CardHeader
            image={imagePath.iconLiveChat}
            title={'Live Chat'}
            type={'All'}
          />
          <Animatable.View animation="slideInUp" style={styles.animation}>
            <View style={styles.animation_view}>
              <CardPost
                list={PLACES}
                action={MainNavigationString.LIVECHATDETAILS}
              />
            </View>
          </Animatable.View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default LiveChatAll;
const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    marginBottom: -100,
    overflow: 'scroll',
    backgroundColor: colors.Background,
  },
  animation: {
    backgroundColor: colors.Background,
    height: 600,
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    top: -120,
  },
  animation_view: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    top: 10,
    paddingTop: 15,
  },
  title: {
    color: colors.whiteText,
    fontSize: 15,
    marginBottom: 20,
    fontWeight: '500',
  },
});
