import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import Styles from './Styles';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';

export type Props = {
  navigation: any;
};

const TabsList = (props: any) => {
  const { navigation } = props;

  return (
    <View style={Styles.serivesContainer}>


      <View style={Styles.servicesListWrap}>
        {/* My Discounts */}
        <TouchableOpacity style={Styles.serviceWrap}>
          <View style={[Styles.serviceIconWrap, { backgroundColor: Colors.DarkPink }]}>
            <Image source={Images.voucher} style={Styles.tabIconSelect} />
          </View>
          <Text style={[Styles.serviceSelectText]}>{`My Discounts`}</Text>
        </TouchableOpacity>

        {/* My Inbox */}
        <TouchableOpacity
          // onPress={() => {
          //   navigation.navigate("CategoryDetials", {
          //     dataItem: { name: `Woodwork` }
          //   })
          // }}
          style={Styles.serviceWrap}>
          <View style={[Styles.serviceIconWrap, { backgroundColor: Colors.WhiteSmoke }]}>
            <Image source={Images.inbox} style={Styles.tabIcon} />
          </View>
          <Text style={Styles.serviceText}>{`My Inbox`}</Text>
        </TouchableOpacity>

        {/* My Profile */}
        <TouchableOpacity style={Styles.serviceWrap}>
          <View style={[Styles.serviceIconWrap, { backgroundColor: Colors.WhiteSmoke }]}>
            <Image source={Images.profile} style={Styles.tabIcon} />
          </View>
          <Text style={Styles.serviceText}>{`My Profile`}</Text>
        </TouchableOpacity>

        {/* Earn/Redeem */}
        <TouchableOpacity style={Styles.serviceWrap}>
          <View style={[Styles.serviceIconWrap, { backgroundColor: Colors.WhiteSmoke }]}>
            <Image source={Images.redeem} style={Styles.tabIcon} />
          </View>
          <Text style={Styles.serviceText}>{`Earn/Redeem`}</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default TabsList;
