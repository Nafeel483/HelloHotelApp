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
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    padding: 20,
  },
  container: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    textAlign: "center",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  cancel: {
    fontSize: 16,
    color: Colors.Black,
    fontFamily: 'ArialNova-Regular',
  },
  ok: {
   fontSize: 16,
    color: Colors.Black,
    fontFamily: 'ArialNova-Regular',
  },


});
export default styles;
