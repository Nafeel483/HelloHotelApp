import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import Styles from './Styles';
import Ionic from 'react-native-vector-icons/Ionicons';
import Images from '../../Styles/Images';
import MenuIcon from '../../../assets/Icons/menu.svg';

export type Props = {
  navigation: any;
};

const HomeHeader = (props: any) => {
  const { navigation } = props;
  const [notificationNo, setNotificationNo] = useState(4)

  return (
    <View style={Styles.headerContainer}>

      <View style={Styles.headerWraper}>
        <TouchableOpacity>
          <Image source={Images.user1} style={Styles.userPicture} />
        </TouchableOpacity>
        <View style={Styles.seperateWrap}>
          <Text style={Styles.welcomeText}>{`Hello Benjamin`}</Text>
          <Text style={Styles.headTitle}>{`Welcome back!`}</Text>
        </View>
      </View>



        <TouchableOpacity>
          {
            notificationNo > 0 ?
              <View style={Styles.dotIcon} />
              : null
          }
          <Ionic name={"notifications-outline"} size={24} style={Styles.iconWrapper} />
        </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;
