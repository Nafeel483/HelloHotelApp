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
import Colors from '../../../../Styles/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AvailaibleRoomCard from '../../../../Components/AvailaibleRoomCard';
import AVAILAIBLE_DATA from '../../../../DataSets/AvailaibleRoomsData';

export type Props = {
  navigation: any;
};

const RoomAvailability = (props: any) => {
  const { navigation } = props;
  const [option, setOption] = useState<any>(1)

  return (
    <SafeAreaView style={[Styles.safeAreaContainer]} edges={{ top: "off" }}>
      <StatusBar barStyle={'light-content'} />
      <View style={Styles.mainContainer}>

        {/* Header */}
        <View style={Styles.headerContainer}>
          <View style={Styles.headerWrapper}>
            <TouchableOpacity onPress={() => { navigation.goBack() }}>
              <Ionicons name="arrow-back" size={26} color={Colors.White} />
            </TouchableOpacity>
            <Text style={Styles.headerText}>{`Room Booking`}</Text>
            <View style={Styles.empty} />
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Styles.scrollWrapper}>

            <View style={Styles.listContainer}>
              <Text style={Styles.listTitle}>{`Room Availability`}</Text>
            </View>

            {/* Information Box */}
            <View style={Styles.infoBoxContainer}>
              <View style={Styles.infoBoxWrap}>
                <Text style={Styles.boxTitle}>{`Stay Information`}</Text>

                <View style={Styles.boxContentWrap}>
                  <Ionicons name="calendar-outline" size={20} color={Colors.Grey} />
                  <View style={Styles.line} />
                  <Text style={Styles.contentInfoText}>{`29 April 2026 - 4 May 2026`}</Text>
                </View>

                <View style={Styles.divider} />

                <View style={Styles.boxContentWrap}>
                  <Ionicons name="bed-outline" size={20} color={Colors.Grey} />
                  <View style={Styles.line} />
                  <Text style={Styles.contentInfoText}>{`02 Rooms  |  2 Adults, 0 Child`}</Text>
                </View>
              </View>
            </View>


            <View style={Styles.prefrenceContainer}>
              <Text style={Styles.preferredText}>{`3 types of rooms are currently available for your preferred stay in Hello Hotel`}</Text>
            </View>

            <View style={Styles.filterContainer}>
              <TouchableOpacity onPress={() => { setOption(1) }}
                style={option == 1 ? Styles.selectButtonWrap : Styles.unSelectButtonWrap}>
                {option == 1 ? (<Ionicons name="checkbox" size={24} color={Colors.White} />) : (
                  <MaterialIcons name="check-box-outline-blank" size={24} color={Colors.DarkPink} />
                )}
                <Text style={option == 1 ? Styles.selectBtnText : Styles.unSelectBtnText}>{`By Room Types`}</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => { setOption(2) }}
                style={option == 2 ? Styles.selectButtonWrap : Styles.unSelectButtonWrap}>
                {option == 2 ? (<Ionicons name="checkbox" size={24} color={Colors.White} />) : (
                  <MaterialIcons name="check-box-outline-blank" size={24} color={Colors.DarkPink} />
                )}
                <Text style={option == 2 ? Styles.selectBtnText : Styles.unSelectBtnText}>{`By Rate Types`}</Text>
              </TouchableOpacity>

            </View>

            {
              AVAILAIBLE_DATA?.map((item, keyID) => (<AvailaibleRoomCard key={keyID} navigation={navigation} item={item} keyID={keyID} />))
            }


          </View>
        </ScrollView>


      </View>
    </SafeAreaView>
  );
}

export default RoomAvailability;
