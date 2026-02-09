import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({

  mainContainer: {
    width: widthScreen,
    alignSelf: "center",
    marginTop: hp(2),
  },

  headImageWrapper: {
    width: widthScreen / 1.15,
    alignSelf: 'center',
    height: hp(17),
    borderRadius: 6
  },
  cardDataContainer: {
    width: widthScreen / 1.18,
    alignSelf: "center",
    marginTop: hp(1.8),
  },
  roomTypeText: {
    fontFamily: 'ArialNova-Bold',
    fontSize: 18,
    color: Colors.BlackPearl,
  },
  detailsText: {
    marginTop: hp(1),
    fontFamily: 'ArialNova-Regular',
    fontSize: 14,
    color: Colors.Blue,
    textDecorationLine: "underline"
  },
  cardWrap: {
    flex: 1,
    justifyContent: "flex-end",
    borderRadius: 4
  },
  dataInfoMain: {
    width: widthScreen / 1.18,
    alignSelf: "center",
    marginTop: hp(2),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: hp(1)
  },
  dataInfoWrap: {
    width: (widthScreen / 1.18) / 3.2,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  iconStyle: {
    width: 20,
    height: 20,
    alignSelf: "center"
  },
  iconPerson: {
    width: 24,
    height: 24,
    alignSelf: "center"
  },
  iconText: {
    fontFamily: 'ArialNova-Regular',
    fontSize: 14,
    color: Colors.DarkPink,
    marginTop: hp(1),
    textAlign: "center",
  },
  detailText: {
    fontFamily: 'ArialNova-Regular',
    fontSize: 14,
    color: Colors.DarkPink,
    marginTop: hp(0.5)
  },
  dataContainer: {
    width: widthScreen / 1.18,
    alignSelf: "center",
    marginTop: hp(1.5),
  },
  dataWrapper: {
    width: '100%',
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleText: {
    fontFamily: 'ArialNova-Regular',
    fontSize: 14,
    color: Colors.DarkBlack,
  },
  priceCutText: {
    marginTop: hp(0.7),
    fontFamily: 'ArialNova-Regular',
    fontSize: 12,
    color: Colors.Grey,
    textDecorationLine: "line-through"
  },
  savingText: {
    fontFamily: 'ArialNova-Regular',
    fontSize: 12,
    color: Colors.Green,
    textDecorationLine: "underline"
  },
  priceText: {
    marginTop: hp(0.7),
    fontFamily: 'ArialNova-Regular',
    fontSize: 14,
    color: Colors.Green,
  },
  durationText: {
    fontFamily: 'ArialNova-Regular',
    fontSize: 12,
    color: Colors.Grey,
  },

  rateDetailText: {
    marginTop: hp(0.3),
    fontFamily: 'ArialNova-Regular',
    fontSize: 12,
    color: Colors.Blue,
    textDecorationLine: "underline"
  },
  buttonContainer: {
    width: 64,
    marginTop: hp(1.7),
    borderRadius: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.DarkPink
  },
  buttonText: {
    fontFamily: 'ArialNova-Regular',
    fontSize: 12,
    color: Colors.White,
  },
  divider: {
    backgroundColor: Colors.FlashGray,
    width: '100%',
    alignSelf: "center",
    height: hp(0.1),
    marginTop: hp(1.5),
    marginBottom: hp(1.5)
  },
});
export default styles;
