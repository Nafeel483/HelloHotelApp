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
  promotionContainer: {
    width: widthScreen,
    alignSelf: "center",
    height: 178,
  },
  cardWrap: {
    flex: 1,
    justifyContent: "flex-end",
    borderRadius: 4
  },
  dataWrap: {
    width: "85%",
    alignSelf: "center",
    marginBottom: hp(4)
  },
  titleText: {
    fontFamily: 'ArialNova-Bold',
    fontSize: 25,
    color: Colors.White,
  },
  detailText: {
    fontFamily: 'ArialNova-Regular',
    fontSize: 16,
    color: Colors.White,
    marginTop: hp(1)
  },
  listContainner: {
    width: widthScreen / 1.15,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: hp(2),
  },
  listTitle: {
    fontSize: 14,
    fontFamily: "ArialNova-Regular",
    color: Colors.Grey
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
  dateContainner: {
    width: widthScreen / 1.15,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: hp(2),
    marginBottom: hp(1)
  },
  dateWrapper: {
    flexDirection: 'row',
    width: '48%',
    alignSelf: 'center',
    backgroundColor: Colors.White,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.Divider,
    borderRadius: 6,
  },
  calendarStyle: {
    marginLeft: hp(1),
    flexDirection: 'row',
    alignItems: 'center',
    gap: hp(1)
  },
  calendarInput: {
    flex: 1,
    marginLeft: hp(1.5)
  },
  textInputHead: {
    fontFamily: 'ArialNova-Regular',
    fontSize: 14,
    color: Colors.Grey,
  },
  textInput: {
    fontFamily: 'ArialNova-Regular',
    fontSize: 18,
    color: Colors.Grey,
  },
  divider: {
    height: 55,
    width: hp(0.1),
    backgroundColor: Colors.Divider
  },
  inputMainContainner: {
    width: widthScreen / 1.15,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: hp(2),
    marginBottom: hp(1)
  },
  inputViewWrap: {
    width: '48%',
    alignSelf: 'center',
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
    height: 55,
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
});
export default styles;