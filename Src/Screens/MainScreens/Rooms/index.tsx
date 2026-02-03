import React, { useState, useContext } from 'react';
import {
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Styles from './Styles';
import Images from '../../../Styles/Images';


export type Props = {
  navigation: any;
};

const Deals = (props: any) => {
  const { navigation, route } = props;
  // const dataItem = route?.params?.itemData

  return (
    <SafeAreaView style={[Styles.safeAreaContainer]}>
      <StatusBar barStyle={'dark-content'} />
      <View style={Styles.mainContainer}>



      </View>
    </SafeAreaView>
  );
}

export default Deals;
