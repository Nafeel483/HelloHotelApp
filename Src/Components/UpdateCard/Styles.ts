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
    marginTop: hp(2),
  },
  listContainner: {
    width: widthScreen / 1.15,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headImageWrap: {
    width: hp(8),
    height: hp(8.5),
    borderRadius: 6
  },
  dataWrap: {
    width: "70%",
  },
  titleText: {
    fontFamily: 'ArialNova-Regular',
    fontSize: 16,
    color: Colors.DarkBlack,
  },
  dateText: {
    fontFamily: 'ArialNova-Regular',
    fontSize: 12,
    color: Colors.Grey,
    marginBottom: hp(0.7)
  },
  line: {
    width: widthScreen / 1.15,
    alignSelf: "center",
    marginTop: hp(2),
    height: hp(0.1),
    backgroundColor: Colors.Divider
  }
});
export default styles;
