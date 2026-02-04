import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({

  cardMainContainer: {
    width: widthScreen / 1.35,
    alignSelf: "center",
    marginTop: hp(2.5),
    marginRight: hp(1.5)
  },
  headImageWrapper: {
    width: "100%",
    alignSelf: 'center',
    height: hp(17),
    borderRadius: 6
  },

  titleText: {
    width: "90%",
    alignSelf: "center",
    fontFamily: 'ArialNova-Regular',
    fontSize: 16,
    lineHeight: 24,
    color: Colors.BlueCharcoal,
    marginTop: hp(1.5),
  },

});
export default styles;
