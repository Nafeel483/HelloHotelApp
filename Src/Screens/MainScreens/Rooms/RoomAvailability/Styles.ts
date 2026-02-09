import { StyleSheet, Dimensions, } from 'react-native';
import Colors from '../../../../Styles/Colors';
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
    backgroundColor: Colors.Black,
    marginBottom: hp(1)
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
  listContainer: {
    width: widthScreen / 1.15,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: hp(2.5),
  },
  listTitle: {
    fontSize: 20,
    fontFamily: "ArialNova-Bold",
    color: Colors.DarkBlack
  },
  infoBoxContainer: {
    width: widthScreen / 1.15,
    alignSelf: "center",
    marginTop: hp(2.5),
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Colors.Divider,
    backgroundColor: Colors.White
  },
  infoBoxWrap: {
    width: '90%',
    alignSelf: "center",
    marginTop: hp(2),
    marginBottom: hp(2),
  },
  boxTitle: {
    fontSize: 18,
    fontFamily: "ArialNova-Regular",
    color: Colors.DarkBlack,
    marginBottom: hp(1),
  },
  boxContentWrap: {
    marginTop: hp(1.2),
    flexDirection: "row",
    alignItems: "center",
    gap: hp(1.2)
  },
  line: {
    backgroundColor: Colors.FlashGray,
    height: 20,
    width: hp(0.1),
  },
  contentInfoText: {
    fontSize: 14,
    fontFamily: "ArialNova-Regular",
    color: Colors.Grey
  },
  divider: {
    backgroundColor: Colors.FlashGray,
    width: '100%',
    alignSelf: "center",
    height: hp(0.1),
    marginTop: hp(1.2),
  },
  prefrenceContainer: {
    width: widthScreen / 1.15,
    alignSelf: "center",
    marginTop: hp(2.5),
  },
  preferredText: {
    fontSize: 14,
    fontFamily: "ArialNova-Regular",
    color: Colors.Grey
  },
  filterContainer: {
    width: widthScreen / 1.15,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: hp(2.5),
  },
  selectButtonWrap: {
    width: "48%",
    alignSelf: "center",
    borderRadius: 10,
    height: 55,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.DarkPink,
    borderWidth: 1,
    borderColor: Colors.DarkPink,
    gap: hp(1.2)
  },
  selectBtnText: {
    fontFamily: 'ArialNova-Regular',
    fontSize: 16,
    color: Colors.White,
  },
  unSelectButtonWrap: {
    width: "48%",
    alignSelf: "center",
    borderRadius: 10,
    height: 55,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.White,
    borderWidth: 1,
    borderColor: Colors.DarkPink,
    gap: hp(1.2)
  },
  unSelectBtnText: {
    fontFamily: 'ArialNova-Regular',
    fontSize: 16,
    color: Colors.DarkPink,
  },

});
export default styles;