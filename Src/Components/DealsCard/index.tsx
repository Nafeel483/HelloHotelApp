import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import Styles from './Styles';
import Colors from '../../Styles/Colors';
import Images from '../../Styles/Images';


export type Props = {
  navigation: any;
};

const DealsCard = (props: any) => {
  const { navigation, item, keyID } = props;

  return (
    <TouchableOpacity key={keyID}
      onPress={() => { navigation.navigate("DealCheckOut") }}
      style={Styles.cardMainContainer}>
      <Image source={item?.thumbnail} style={Styles.headImageWrapper} />
      <Text style={Styles.titleText}>{item?.dealTitle}</Text>
    </TouchableOpacity>
  );
};

export default DealsCard;
