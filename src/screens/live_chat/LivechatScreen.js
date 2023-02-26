import {StyleSheet, SafeAreaView, ScrollView, View, Text} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import CustomHeader from '../../components/home/CustomHeader';
import {colors} from '../../constants/theme';
import {useNavigation} from '@react-navigation/native';
import TopMenuHeader from '../../components/TopMenuHeader';
import imagePath from '../../constants/imagePath';
import OptionCard from '../../components/common/OptionCard';
import MainNavigationString from '../../navigations/MainNavigationString';

const LivechatScreen = () => {
  const Navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <CustomHeader backFunc={() => Navigation.goBack()} tns />
        <TopMenuHeader image={imagePath.iconLiveChat} title={'Live Chat'} />
        <Animatable.View animation="slideInUp" style={styles.animation}>
          <View style={styles.animation_view}>
            <Text style={styles.title}>Live Chat</Text>
            <OptionCard
              action={MainNavigationString.LIVECHATCREATE}
              // payload={{
              //   typeName: 'LiveChatCreate',
              // }}
              icon={imagePath.iconCreate}
              title={'Create'}
            />
            <OptionCard
              icon={imagePath.iconPending}
              title={'Pending'}
              cout={5}
            />
            <OptionCard icon={imagePath.iconApproved} title={'Approved'} />
            <OptionCard icon={imagePath.iconComoleted} title={'Completed'} />
            <OptionCard
              icon={imagePath.iconReject}
              title={'Recject'}
              cout={10}
            />
            <OptionCard
              icon={imagePath.iconAll}
              title={'All'}
              action={MainNavigationString.LIVECHATALL}
            />
          </View>
        </Animatable.View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LivechatScreen;

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
