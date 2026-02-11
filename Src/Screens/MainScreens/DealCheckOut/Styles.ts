import { StyleSheet, Dimensions, } from 'react-native';
import Colors from '../../../Styles/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.White
  },
  mainContainer: {
    flex: 1,
  },
  scrollWrapper: {
    marginBottom: hp('12%')
  },
  headerContainer: {
    width: widthScreen,
    alignSelf: "center",
    height: 120,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: Colors.Black
  },
  headerWrapper: {
    width: widthScreen / 1.15,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: hp(2)
  },
  headerText: {
    fontSize: 20,
    fontFamily: "ArialNova-Regular",
    color: Colors.White
  },
  empty: {
    width: 26,
  },
  cardMainContainer: {
    width: widthScreen / 1.15,
    alignSelf: "center",
    marginTop: hp(2),
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Colors.Divider
  },
  listContainner: {
    width: "100%",
    alignSelf: "center",
    flexDirection: "row",
    gap: hp(1.5),
    alignItems: "center",
  },
  headImageWrap: {
    width: 105,
    height: 80,
    borderRadius: 6
  },
  dataWrap: {
    width: "70%",
  },
  nameText: {
    fontFamily: 'ArialNova-Bold',
    fontSize: 18,
    color: Colors.DarkBlack,
    marginBottom: hp(0.6)
  },
  titleText: {
    fontFamily: 'ArialNova-Regular',
    fontSize: 14,
    color: Colors.DarkPink,
    marginBottom: hp(0.6)
  },
  detailText: {
    fontFamily: 'ArialNova-Regular',
    fontSize: 12,
    color: Colors.Grey,
  },
  boxContainer: {
    width: widthScreen / 1.15,
    alignSelf: "center",
    marginTop: hp(2.5),
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Colors.Divider,
    backgroundColor: Colors.White
  },
  boxWrap: {
    width: '90%',
    alignSelf: "center",
    marginTop: hp(2),
    marginBottom: hp(2),
  },
  boxTitle: {
    fontSize: 18,
    fontFamily: "ArialNova-Regular",
    color: Colors.DarkBlack,
  },
  divider: {
    backgroundColor: Colors.FlashGray,
    width: '100%',
    alignSelf: "center",
    height: hp(0.1),
    marginTop: hp(1.5),
  },

  inputMainContainer: {
    width: '100%',
    alignSelf: "center",
    marginTop: hp(1.5),
  },
  inputHeadWrap: {
    marginBottom: hp(1.2)
  },
  inputHeadTitle: {
    fontFamily: 'ArialNova-Regular',
    fontSize: 14,
    color: Colors.Grey,
  },
  dropDownWrapper: {
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'center',
    backgroundColor: Colors.White,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.Divider,
    borderRadius: 6,
  },
  dropInput: {
    flex: 1,
    fontFamily: 'ArialNova-Regular',
    fontSize: 14,
    color: Colors.Grey,
    marginLeft: hp(1.2)
  },
  iconDropdown: {
    width: 20,
    height: 20,
    marginRight: hp(2),
    tintColor: Colors.Grey
  },
  dropListContainer: {
    backgroundColor: Colors.White,
    borderWidth: 1,
    borderColor: Colors.Divider,
    marginTop: hp(1),
    borderRadius: 4,
  },
  itemContainer: {
    borderRadius: 8,
    backgroundColor: Colors.White,
    borderBottomWidth: 0.2,
  },
  selectInput: {
    flex: 1,
    fontFamily: 'ArialNova-Regular',
    fontSize: 14,
    color: Colors.Grey,
    marginLeft: hp(1.5),
  },

  dateWrapper: {
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'center',
    backgroundColor: Colors.White,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.Divider,
    borderRadius: 6,
  },
  textInput: {
    flex: 1,
    fontFamily: 'ArialNova-Regular',
    fontSize: 14,
    color: Colors.Grey,
    marginLeft: hp(2)
  },
  calendarIcon: {
    color: Colors.Grey,
    marginRight: hp(2),
  },
  contentText: {
    fontFamily: 'ArialNova-Regular',
    fontSize: 14,
    color: Colors.Grey,
    marginTop: hp(1.5),
  },
  discountTitle: {
    fontSize: 18,
    fontFamily: "ArialNova-Regular",
    color: Colors.DarkBlack,
    marginBottom: hp(1.5)
  },
  dataContainner: {
    width: '100%',
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: hp(1.5),
  },
  summaryText: {
    fontFamily: 'ArialNova-Regular',
    fontSize: 14,
    color: Colors.Grey,
  },
  priceText: {
    fontFamily: 'ArialNova-Regular',
    fontSize: 14,
    color: Colors.DarkBlack,
  },
  totalText: {
    fontFamily: 'ArialNova-Regular',
    fontSize: 14,
    color: Colors.DarkBlack,
  },
  totalPriceText: {
    fontFamily: 'ArialNova-Regular',
    fontSize: 14,
    color: Colors.Green,
  },
  noteText: {
    fontFamily: 'ArialNova-Regular',
    fontSize: 12,
    color: Colors.Grey,
    marginTop: hp(1.3),
  },

  sliderStyle: {
    width: "100%",
    alignSelf:"center",
    height: 40,
    borderRadius: 10,
    // marginTop: hp(1.3),
  },
  balanceText: {
    fontFamily: 'ArialNova-Regular',
    fontSize: 14,
    color: Colors.DarkPink,
  },
  paymentContainner: {
    width: '100%',
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: hp(2),
  },
  payIcon: {
    color: Colors.MidBlack,
    marginLeft: hp(1.5),
  },

  buttonContainer: {
    width: widthScreen / 1.15,
    alignSelf: "center",
    marginTop: hp(3),
    borderRadius: 30,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.DarkPink
  },
  buttonText: {
    fontFamily: 'ArialNova-Regular',
    fontSize: 16,
    color: Colors.White,
  },
});
export default styles;