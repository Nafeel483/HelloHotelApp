import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mainContainer: {
    width: widthScreen,
    alignSelf: 'center',
    justifyContent: "center",
    backgroundColor: Colors.White,
    height: hp(31)
  },
  headerContainer: {
    width: widthScreen,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.Black,
    height: hp(25)
  },
  headerWraper: {
    width: widthScreen / 1.15,
    alignSelf: 'center',
    marginTop: hp(3),
    flexDirection: 'row',
    alignItems: 'center',
    gap: hp(2),
    marginBottom: hp(2),
  },
  userPicture: {
    width: 56,
    height: 56,
    borderRadius: 100,
  },

  headTitle: {
    fontFamily: 'ArialNova-Regular',
    fontSize: hp(2),
    color: Colors.White,
  },

  welcomeText: {
    fontFamily: 'ArialNova-Regular',
    fontSize: hp(1.6),
    color: Colors.White,
    marginTop: hp(0.3)
  },
  userPoints: {
    fontFamily: 'ArialNova-Regular',
    fontSize: hp(1.6),
    color: Colors.DarkPink,
    marginTop: hp(0.5)
  },

  cardContainer: {
    width: '100%',
    height: 142,
    alignSelf: 'center',
    marginTop: hp(-5),
    zIndex: 1,
  },
  cardInnerWrap: {
    marginTop: hp(2),
    marginBottom: hp(2),
    width: "80%",
    alignSelf: "center"
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cardInfoWrap: {
    marginTop: hp(3),
    alignItems: "flex-end",
  },
  cardIcon: {
    width: 66.82,
    height: 22.29
  },
  categoryText: {
    fontFamily: 'ArialNova-Regular',
    fontSize: 12,
    color: Colors.DarkBlack,
  },
  cardNoText: {
    fontFamily: 'ArialNova-Regular',
    fontSize: 18,
    color: Colors.DarkBlack,
  },
  expiryText: {
    fontFamily: 'ArialNova-Regular',
    fontSize: 12,
    color: Colors.DarkBlack,
    marginTop: hp(0.5)
  },
});
export default styles;
