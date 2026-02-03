import { StyleSheet, Dimensions, } from 'react-native';
import Colors from '../../../Styles/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  backgroundContainer: {
    width: widthScreen,
    height: heightScreen,
  },
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
  // headerContainer: {
  //   width: widthScreen,
  //   alignSelf: "center",
  //   marginTop: hp(1.5),
  //   height: 70,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   borderTopWidth: 1,
  //   borderBottomWidth: 1,
  //   marginBottom: hp(1)
  // },
  // headerWrapper: {
  //   width: widthScreen / 1.12,
  //   alignSelf: "center",
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  // },
  // backIcon: {
  //   width: hp(4),
  //   height: hp(4),
  //   borderRadius: 10,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   borderWidth: 1,

  // },
  // headerText: {
  //   fontSize: 16,
  //   fontFamily: "ArialNova-Bold",
  // },
  // empty: {
  //   width: hp(4),
  // },

});
export default styles;