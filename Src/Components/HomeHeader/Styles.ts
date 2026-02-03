import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: hp(2),
    width: widthScreen / 1.12,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    marginBottom: hp(1),
  },
  headerWraper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userPicture: {
    width: 48,
    height: 48,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: Colors.BorderColor,
  },
  seperateWrap: {
    marginLeft: hp(1)
  },
  headTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    lineHeight: 22,
    color: Colors.RichBlack,
  },

  welcomeText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    lineHeight: 16,
    color: Colors.Gray,
  },
  iconWrapper: {
    color: Colors.ShadyGray,
  },
  listIcons: {
    width: 40,
    height: 40,
    alignSelf: "center"
  },
  dotIcon: {
    width: 6,
    height: 6,
    borderRadius: 100,
    backgroundColor: Colors.FlameOrange,
    position: 'absolute',
    right: 4,
    top: 1,
    zIndex: 1
  }
});
export default styles;
