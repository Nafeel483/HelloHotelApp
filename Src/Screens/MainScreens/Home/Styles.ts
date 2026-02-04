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
  contentContainer: {
    width: widthScreen,
    alignSelf: "center",
    backgroundColor: Colors.White
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
    fontSize: 18,
    fontFamily: "ArialNova-Bold",
    color: Colors.BlackPearl
  },
  popularWrapper: {
    width: widthScreen / 1.08,
    alignSelf: "flex-end",
    alignItems: 'center',
    justifyContent: "center",
    marginBottom: hp(2)
  },

});
export default styles;