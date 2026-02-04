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
    width: widthScreen / 1.15,
    alignSelf: "center",
    marginTop: hp(2.5),
  },
  headImageWrapper: {
    width: "100%",
    alignSelf: 'center',
    height: hp(17),
  },
  cardWrap: {
    flex: 1,
    justifyContent: "flex-end",
    borderRadius: 4
  },
  dataWrap: {
    width: "90%",
    alignSelf: "center",
    marginBottom: hp(1.5)
  },
  titleText: {
    fontFamily: 'ArialNova-Bold',
    fontSize: 20,
    color: Colors.White,
  },
  detailText: {
    fontFamily: 'ArialNova-Regular',
    fontSize: 14,
    color: Colors.DarkPink,
    marginTop: hp(0.5)
  },
  
});
export default styles;
