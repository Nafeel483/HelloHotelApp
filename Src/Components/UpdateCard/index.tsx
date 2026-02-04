import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import Styles from './Styles';
import Colors from '../../Styles/Colors';
import Images from '../../Styles/Images';
import { LinearGradient } from "expo-linear-gradient";


export type Props = {
  navigation: any;
};

const UpdateCard = (props: any) => {
  const { navigation, item, keyID } = props;

  return (
    <TouchableOpacity key={keyID}
      // onPress={() => {
      //   navigation.navigate("RestaurantView", {
      //     passData: item
      //   })
      // }}
      style={Styles.cardMainContainer}>
      <View style={Styles.listContainner}>
        <View style={Styles.dataWrap}>
          <Text style={Styles.dateText}>{`${item?.date} . ${item?.time}`}</Text>
          <Text style={Styles.titleText}>{item?.title}</Text>
        </View>
        <Image source={item?.thumbnail} style={Styles.headImageWrap} />
      </View>
      <View style={Styles.line} />
    </TouchableOpacity>
  );
};

export default UpdateCard;
