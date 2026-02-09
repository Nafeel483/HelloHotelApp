import React, { useState, useContext } from 'react';
import {
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Styles from './Styles';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import ModalDatePicker from '../../../Components/ModalDatePicker';
import moment from 'moment';
import { Dropdown } from 'react-native-element-dropdown';
import ROOM_DATA from '../../../DataSets/RoomData';

export type Props = {
  navigation: any;
};

const Deals = (props: any) => {
  const { navigation, route } = props;
  const [checkIn, setCheckIn] = useState<any>("")
  const [checkOut, setCheckOut] = useState<any>("")
  const [checkInOpen, setCheckInOpen] = useState(false)
  const [checkOutOpen, setCheckOutOpen] = useState(false)

  const [date, setDate] = useState(new Date())
  const [totalRoom, setTotalRoom] = useState("")
  const [totalGuest, setTotalGuest] = useState("")

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

            {/* Promotion Banner */}
            <ImageBackground source={Images.promotePic}
              style={Styles.promotionContainer}>
              <LinearGradient colors={['rgba(0,0,0,0.3)', Colors.Black]}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={Styles.cardWrap}>
                <View style={Styles.dataWrap}>
                  <Text style={Styles.titleText}>{`30% OFF`}</Text>
                  <Text style={Styles.detailText}>{`Weekend Offers`}</Text>
                </View>
              </LinearGradient>
            </ImageBackground>

            {/* Preferred Stay Date */}
            <View style={Styles.listContainner}>
              <Text style={Styles.listTitle}>{`Preferred Stay Date`}</Text>
            </View>

            {/* Select Date */}
            <View style={Styles.dateContainner}>
              {/* Check In */}
              <TouchableOpacity onPress={() => { setCheckInOpen(true) }} style={Styles.dateWrapper}>
                <View style={Styles.calendarStyle}>
                  <MaterialIcons name="calendar-today" size={18} color={Colors.DarkBlack} />
                  <View style={Styles.divider} />
                </View>
                <View style={Styles.calendarInput}>
                  <Text style={Styles.textInputHead}>{"Check In"}</Text>
                  <Text style={Styles.textInput}>{checkIn != "" ? checkIn : ""}</Text>
                </View>
              </TouchableOpacity>

              {/* Check Out */}
              <TouchableOpacity onPress={() => { setCheckOutOpen(true) }} style={Styles.dateWrapper}>
                <View style={Styles.calendarStyle}>
                  <MaterialIcons name="calendar-today" size={18} color={Colors.DarkBlack} />
                  <View style={Styles.divider} />
                </View>
                <View style={Styles.calendarInput}>
                  <Text style={Styles.textInputHead}>{"Check Out"}</Text>
                  <Text style={Styles.textInput}>{checkOut != "" ? checkOut : ""}</Text>
                </View>
              </TouchableOpacity>
            </View>

            {/* Room & Guests */}
            <View style={Styles.inputMainContainner}>

              {/* Total Room */}
              <View style={Styles.inputViewWrap}>
                <View style={Styles.inputHeadWrap}>
                  <Text style={Styles.inputHeadTitle}>{"Total Rooms"}</Text>
                </View>
                <Dropdown style={[Styles.dropDownWrapper]}
                  placeholderStyle={[Styles.dropInput]}
                  selectedTextStyle={Styles.dropInput}
                  inputSearchStyle={Styles.dropInput}
                  iconStyle={[Styles.iconDropdown]}
                  containerStyle={[Styles.dropListContainer]}
                  itemContainerStyle={Styles.itemContainer}
                  itemTextStyle={Styles.selectInput}
                  data={ROOM_DATA?.roomsList}
                  search={false}
                  activeColor={"transparent"}
                  maxHeight={220}
                  labelField="label"
                  valueField="value"
                  placeholder="Select Option"

                  value={totalRoom}
                  onChange={item => {
                    setTotalRoom(item.value);
                  }} />
              </View>

              {/* Total Guest */}
              <View style={Styles.inputViewWrap}>
                <View style={Styles.inputHeadWrap}>
                  <Text style={Styles.inputHeadTitle}>{"Total Guest"}</Text>
                </View>
                <Dropdown style={[Styles.dropDownWrapper]}
                  placeholderStyle={[Styles.dropInput]}
                  selectedTextStyle={Styles.dropInput}
                  inputSearchStyle={Styles.dropInput}
                  iconStyle={[Styles.iconDropdown]}
                  containerStyle={[Styles.dropListContainer]}
                  itemContainerStyle={Styles.itemContainer}
                  itemTextStyle={Styles.selectInput}
                  data={ROOM_DATA?.guestList}
                  search={false}
                  activeColor={"transparent"}
                  maxHeight={220}
                  labelField="label"
                  valueField="value"
                  placeholder="Select Option"

                  value={totalGuest}
                  onChange={item => {
                    setTotalGuest(item.value);
                  }} />
              </View>
            </View>


            {/* Button */}
            <TouchableOpacity onPress={() => { navigation.navigate("RoomAvailability") }}
              style={Styles.buttonContainer}>
              <Text style={Styles.buttonText}>{`Find Available Room`}</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>

        {
          checkInOpen == true &&
          <ModalDatePicker
            visible={checkInOpen}
            date={date}
            onCancel={() => setCheckInOpen(false)}
            onConfirm={(d: any) => {
              setCheckIn(moment(d).format('DD/MM/YYYY'))
              setCheckInOpen(false)
            }}
          />
        }

        {
          checkOutOpen == true &&
          <ModalDatePicker
            visible={checkOutOpen}
            date={date}
            onCancel={() => setCheckOutOpen(false)}
            onConfirm={(d: any) => {
              setCheckOut(moment(d).format('DD/MM/YYYY'))
              setCheckOutOpen(false)
            }}
          />
        }


      </View>
    </SafeAreaView>
  );
}

export default Deals;