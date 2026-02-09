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
import Images from '../../Styles/Images';

export type Props = {
  navigation: any;
};

const AvailaibleRoomCard = (props: any) => {
  const { navigation, item, keyID } = props;

  return (
    <View key={keyID} style={Styles.mainContainer}>

      <Image source={item?.roomThumbnail} style={Styles.headImageWrapper} />
      <View style={Styles.cardDataContainer}>
        <Text style={Styles.roomTypeText}>{item?.roomType}</Text>
        <Text style={Styles.detailsText}>{`Room Details`}</Text>

        <View style={Styles.dataInfoMain}>
          {/* Room Size */}
          <View style={Styles.dataInfoWrap}>
            <Image source={Images.size} style={Styles.iconStyle} />
            <Text style={Styles.iconText}>{`${item?.roomSize} Sqm`}</Text>
          </View>
          {/* Bed Size */}
          <View style={Styles.dataInfoWrap}>
            <Image source={Images.bed} style={Styles.iconStyle} />
            <Text style={Styles.iconText}>{item?.roomBed}</Text>
          </View>
          {/* No of Persons */}
          <View style={Styles.dataInfoWrap}>
            <Image source={Images.people} style={Styles.iconPerson} />
            <Text style={Styles.iconText}>{`${item?.guests} Guests`}</Text>
          </View>
        </View>

        {
          item?.rateLists.map((val: any, valID: any) => (
            <View key={valID} style={Styles.dataContainer}>
              <View style={Styles.dataWrapper}>

                <View>
                  <Text style={Styles.titleText}>{val?.title}</Text>
                  <Text style={Styles.priceCutText}>
                    <Text style={Styles.priceCutText}>{`${val?.price} `}</Text>
                    <Text style={Styles.savingText}>{`Saving (${val?.discount})`}</Text>
                  </Text>
                  <Text style={Styles.priceText}>
                    <Text style={Styles.priceText}>{val?.discountPrice}</Text>
                    <Text style={Styles.durationText}>{` for 1 night`}</Text>
                  </Text>
                </View>
                <View>
                  <Text style={Styles.rateDetailText}>{`Rate Details`}</Text>

                  <TouchableOpacity
                    // onPress={() => { navigation.navigate("RoomAvailability") }}
                    style={Styles.buttonContainer}>
                    <Text style={Styles.buttonText}>{`Select`}</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={Styles.divider} />
            </View>
          ))
        }


        {/* <Text style={Styles.detailText}>{`${item?.description}`}</Text> */}
      </View>
    </View>
  );
};

export default AvailaibleRoomCard;
