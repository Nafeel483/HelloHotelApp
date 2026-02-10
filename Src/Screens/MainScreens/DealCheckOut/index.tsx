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
import { Dropdown, SelectCountry } from 'react-native-element-dropdown';
import DEALS_DATA from '../../../DataSets/DealsData';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import ModalDatePicker from '../../../Components/ModalDatePicker';
import Slider from '@react-native-community/slider';
import moment from 'moment';

export type Props = {
  navigation: any;
};

const DealCheckOut = (props: any) => {
  const { navigation, route } = props;
  const [qty, setQty] = useState("")
  const [voucher, setVoucher] = useState("")
  const [redeemDate, setRedemptionDate] = useState("")
  const [paymentMode, setPaymentMode] = useState("VISA/MasterCard")
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState(new Date())
  const [pointRedeem, setPointRedeem] = useState<number>(20);

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
            <Text style={Styles.headerText}>{`Deals`}</Text>
            <View style={Styles.empty} />
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Styles.scrollWrapper}>

            <View style={Styles.cardMainContainer}>
              <View style={Styles.listContainner}>
                <Image source={Images.deal1} style={Styles.headImageWrap} />
                <View style={Styles.dataWrap}>
                  <Text style={Styles.nameText}>{`Chrismas Afternoon Tea`}</Text>
                  <Text style={Styles.titleText}>{`Hello Restaurant`}</Text>
                  <Text style={Styles.detailText}>{`Hello Hotel`}</Text>
                </View>
              </View>
            </View>

            {/* Voucher */}
            <View style={Styles.boxContainer}>
              <View style={Styles.boxWrap}>
                <Text style={Styles.boxTitle}>{`Voucher`}</Text>

                <View style={Styles.divider} />

                <View style={Styles.inputMainContainer}>
                  <View style={Styles.inputHeadWrap}>
                    <Text style={Styles.inputHeadTitle}>{"Select Qty"}</Text>
                  </View>
                  <Dropdown style={[Styles.dropDownWrapper]}
                    placeholderStyle={[Styles.dropInput]}
                    selectedTextStyle={Styles.dropInput}
                    inputSearchStyle={Styles.dropInput}
                    iconStyle={[Styles.iconDropdown]}
                    containerStyle={[Styles.dropListContainer]}
                    itemContainerStyle={Styles.itemContainer}
                    itemTextStyle={Styles.selectInput}
                    data={DEALS_DATA?.qtyList}
                    search={false}
                    activeColor={"transparent"}
                    maxHeight={220}
                    labelField="label"
                    valueField="value"
                    placeholder="Select Quantity"
                    value={qty}
                    onChange={item => {
                      setQty(item.value);
                    }} />
                </View>
                <View style={Styles.inputMainContainer}>
                  <View style={Styles.inputHeadWrap}>
                    <Text style={Styles.inputHeadTitle}>{"Select Redemption Date"}</Text>
                  </View>
                  <TouchableOpacity onPress={() => { setOpen(true) }} style={Styles.dateWrapper}>
                    <Text style={Styles.textInput}>{redeemDate != "" ? redeemDate : "Add Date"}</Text>
                    <MaterialIcons name="calendar-month" size={20} style={Styles.calendarIcon} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* Redeemption Time */}
            <View style={Styles.boxContainer}>
              <View style={Styles.boxWrap}>
                <Text style={Styles.boxTitle}>{`Redeemption Time`}</Text>
                <Text style={Styles.contentText}>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.`}</Text>
              </View>
            </View>

            {/* Redeemption Restriction */}
            <View style={Styles.boxContainer}>
              <View style={Styles.boxWrap}>
                <Text style={Styles.boxTitle}>{`Redeemption Restriction`}</Text>
                <Text style={Styles.contentText}>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.`}</Text>
              </View>
            </View>

            {/* Discount Voucher */}
            <View style={Styles.boxContainer}>
              <View style={Styles.boxWrap}>
                <Text style={Styles.discountTitle}>{`Discount Voucher`}</Text>
                <Dropdown style={[Styles.dropDownWrapper]}
                  placeholderStyle={[Styles.dropInput]}
                  selectedTextStyle={Styles.dropInput}
                  inputSearchStyle={Styles.dropInput}
                  iconStyle={[Styles.iconDropdown]}
                  containerStyle={[Styles.dropListContainer]}
                  itemContainerStyle={Styles.itemContainer}
                  itemTextStyle={Styles.selectInput}
                  data={DEALS_DATA?.voucherList}
                  search={false}
                  activeColor={"transparent"}
                  maxHeight={220}
                  labelField="label"
                  valueField="value"
                  placeholder="Select your Voucher"
                  value={voucher}
                  onChange={item => {
                    setVoucher(item.value);
                  }} />
              </View>
            </View>

            {/* Price Summary */}
            <View style={Styles.boxContainer}>
              <View style={Styles.boxWrap}>
                <Text style={Styles.boxTitle}>{`Price Summary`}</Text>
                <View style={Styles.divider} />

                <View style={Styles.dataContainner}>
                  <Text style={Styles.summaryText}>{"Total Deals"}</Text>
                  <Text style={Styles.priceText}>{"400.00 MYR"}</Text>
                </View>
                <View style={Styles.divider} />

                <View style={Styles.dataContainner}>
                  <Text style={Styles.summaryText}>{"Discount Voucher"}</Text>
                  <Text style={Styles.priceText}>{"-36.00 MYR"}</Text>
                </View>
                <View style={Styles.divider} />
                <View style={Styles.dataContainner}>
                  <Text style={Styles.summaryText}>{"Service Tax (8%)"}</Text>
                  <Text style={Styles.priceText}>{"25.92 MYR"}</Text>
                </View>
                <View style={Styles.divider} />
                <View style={Styles.dataContainner}>
                  <Text style={Styles.summaryText}>{"Grand Total"}</Text>
                  <Text style={Styles.priceText}>{"25.92 MYR"}</Text>
                </View>
                <View style={Styles.dataContainner}>
                  <Text style={Styles.summaryText}>{"Point Redemption"}</Text>
                  <Text style={Styles.priceText}>{"-10.00 MYR"}</Text>
                </View>
                <View style={Styles.divider} />
                <View style={Styles.dataContainner}>
                  <Text style={Styles.totalText}>{"Total Payable"}</Text>
                  <Text style={Styles.totalPriceText}>{"339.92 MYR"}</Text>
                </View>
              </View>
            </View>


            {/* Payment Mode */}
            <View style={Styles.boxContainer}>
              <View style={Styles.boxWrap}>
                <Text style={Styles.discountTitle}>{`Payment Mode`}</Text>
                <Dropdown style={[Styles.dropDownWrapper]}
                  placeholderStyle={[Styles.dropInput]}
                  selectedTextStyle={Styles.dropInput}
                  inputSearchStyle={Styles.dropInput}
                  iconStyle={[Styles.iconDropdown]}
                  containerStyle={[Styles.dropListContainer]}
                  itemContainerStyle={Styles.itemContainer}
                  itemTextStyle={Styles.selectInput}
                  renderLeftIcon={() => (
                    <Ionicons name="card-outline" size={20} style={Styles.payIcon} />
                  )}
                  data={DEALS_DATA.paymentData}
                  search={false}
                  activeColor={"transparent"}
                  maxHeight={220}
                  labelField="label"
                  valueField="value"
                  placeholder="Select Payment Method"

                  value={paymentMode}
                  onChange={item => {
                    setPaymentMode(item.value);
                  }} />

                <Text style={Styles.noteText}>{`Note: You will be directed to a secure 3rd party payment page to complete your payment.`}</Text>
                  
              </View>
            </View>

            {/* Point Redemption */}
            <View style={Styles.boxContainer}>
              <View style={Styles.boxWrap}>
                <Text style={Styles.boxTitle}>{`Point Redemption`}</Text>
                <View style={Styles.divider} />

                <View style={Styles.paymentContainner}>
                  <Text style={Styles.balanceText}>{"Available Balance"}</Text>
                  <Text style={Styles.balanceText}>{"30 Points"}</Text>
                </View>
                <Slider
                  // containerStyle={Styles.sliderContainer}
                  style={Styles.sliderStyle}
                  minimumValue={0}
                  maximumValue={50}
                  step={10}
                  value={pointRedeem}
                  onValueChange={(value: any) => { setPointRedeem(value) }}
                  // renderThumbComponent={CustomThumb} 
                  minimumTrackTintColor={Colors.DarkPink}
                  maximumTrackTintColor={Colors.Divider} />
              </View>
            </View>


            {/* Button */}
            <TouchableOpacity
              // onPress={() => { navigation.navigate("RoomAvailability") }}
              style={Styles.buttonContainer}>
              <Text style={Styles.buttonText}>{`Pay Now`}</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>

        {
          open == true &&
          <ModalDatePicker
            visible={open}
            date={date}
            onCancel={() => setOpen(false)}
            onConfirm={(d: any) => {
              setRedemptionDate(moment(d).format('DD MMMM YYYY'))
              setOpen(false)
            }}
          />
        }

      </View>
    </SafeAreaView>
  );
}

export default DealCheckOut;
