import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  serivesContainer: {
    width: widthScreen,
    alignSelf: 'center',
    marginTop: hp(2),
  },
  servicesListWrap: {
    marginTop: hp(3),
    width: widthScreen / 1.12,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
  },
  serviceWrap: {
    width: 74,
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceIconWrap: {
    width: 60,
    height: 60,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.Divider
  },
  tabIconSelect: {
    width: 24,
    height: 24,
    tintColor: Colors.White
  },
  tabIcon: {
    width: 24,
    height: 24,
  },
  serviceSelectText: {
    fontFamily: 'ArialNova-Regular',
    fontSize: 12,
    marginTop: hp(1.2),
    textAlign: "center",
    color: Colors.DarkPink,
  },
  serviceText: {
    fontFamily: 'ArialNova-Regular',
    fontSize: 12,
    marginTop: hp(1.2),
    color: Colors.BlueCharcoal,
    textAlign: "center"
  },
});
export default styles;
