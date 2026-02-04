import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import Styles from './Styles';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';

export type Props = {
  navigation: any;
};

const HomeHeader = (props: any) => {
  const { navigation } = props;

  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.headerContainer}>
        <View style={Styles.headerWraper}>
          <TouchableOpacity>
            <Image source={Images.user1} style={Styles.userPicture} />
          </TouchableOpacity>
          <View>
            <Text style={Styles.headTitle}>{`Hi, Wilson!`}</Text>
            <Text style={Styles.welcomeText}>{`Welcome to Hello Hotel`}</Text>
            <Text style={Styles.userPoints}>{`3,570 Points`}</Text>
          </View>
        </View>
      </View>

      <ImageBackground source={Images.card}
        style={Styles.cardContainer}>
        <View style={Styles.cardInnerWrap}>
          <View style={Styles.cardHeader}>
            <Image source={Images.card1} style={Styles.cardIcon} />
            <Text style={Styles.categoryText}>{`SILVER`}</Text>
          </View>
          <View style={Styles.cardInfoWrap}>
            <Text style={Styles.cardNoText}>{`6699 6699 0056 7647`}</Text>
            <Text style={Styles.expiryText}>{`EXP 04/26`}</Text>
          </View>
        </View>
      </ImageBackground>

    </View>
  );
};

export default HomeHeader;
