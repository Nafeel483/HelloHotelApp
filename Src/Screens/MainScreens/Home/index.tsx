import React, { useState, useContext } from 'react';
import {
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Styles from './Styles';
import Colors from '../../../Styles/Colors';
import TabsList from '../../../Components/TabsList';
import HomeHeader from '../../../Components/HomeHeader';
import Feather from '@expo/vector-icons/Feather';
import DealsCard from '../../../Components/DealsCard';
import RoomCard from '../../../Components/RoomCard';
import UpdateCard from '../../../Components/UpdateCard';
import HOME_DATA from '../../../DataSets/HomeData';

export type Props = {
  navigation: any;
};

const Home = (props: any) => {
  const { navigation, route } = props;
  // const dataItem = route?.params?.itemData

  return (
    <SafeAreaView style={[Styles.safeAreaContainer]} edges={{ top: "off" }}>
      <StatusBar barStyle={'light-content'} />
      <View style={Styles.mainContainer}>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Styles.scrollWrapper}>
            {/* Header */}
            <HomeHeader navigation={navigation} />

            <View style={Styles.contentContainer}>
              <TabsList navigation={navigation} />

              {/* Deals */}
              <View style={Styles.listContainner}>
                <Text style={Styles.listTitle}>{`Deals`}</Text>
                <TouchableOpacity>
                  <Feather name="chevron-right" size={24} color={Colors.Grey} />
                </TouchableOpacity>
              </View>

              <View style={Styles.popularWrapper}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  {
                    HOME_DATA?.dealData?.map((item, keyID) => (<DealsCard key={keyID} navigation={navigation} item={item} keyID={keyID} />))
                  }
                </ScrollView>
              </View>

              {/* Updates */}
              <View style={Styles.listContainner}>
                <Text style={Styles.listTitle}>{`Updates`}</Text>
                <TouchableOpacity>
                  <Feather name="chevron-right" size={24} color={Colors.Grey} />
                </TouchableOpacity>
              </View>
              {
                HOME_DATA?.updatesData?.map((item, keyID) => (<UpdateCard key={keyID} navigation={navigation} item={item} keyID={keyID} />))
              }

              {/* Recommended Rooms */}
              <View style={Styles.listContainner}>
                <Text style={Styles.listTitle}>{`Recommended Rooms`}</Text>
                <TouchableOpacity>
                  <Feather name="chevron-right" size={24} color={Colors.Grey} />
                </TouchableOpacity>
              </View>

              {
                HOME_DATA?.recommendRoomData?.map((item, keyID) => (<RoomCard key={keyID} navigation={navigation} item={item} keyID={keyID} />))
              }
            </View>


          </View>
        </ScrollView>

      </View>
    </SafeAreaView>
  );
}

export default Home;
