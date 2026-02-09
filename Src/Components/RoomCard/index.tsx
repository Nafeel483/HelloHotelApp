import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import Styles from './Styles';
import { LinearGradient } from "expo-linear-gradient";


export type Props = {
  navigation: any;
};

const RoomCard = (props: any) => {
  const { navigation, item, keyID } = props;

  return (
    <TouchableOpacity key={keyID}
      // onPress={() => {
      //   navigation.navigate("RestaurantView", {
      //     passData: item
      //   })
      // }}
      style={Styles.cardMainContainer}>
      <ImageBackground source={item?.thumbnail}
        style={Styles.headImageWrapper} imageStyle={{ borderRadius: 6 }}>

        <LinearGradient colors={['transparent', 'rgba(0,0,0,0.85)']}
          start={{ x: 1, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={Styles.cardWrap}>

          <View style={Styles.dataWrap}>
            <Text style={Styles.titleText}>{item?.title}</Text>
            <Text style={Styles.detailText}>{`${item?.description}`}</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default RoomCard;
