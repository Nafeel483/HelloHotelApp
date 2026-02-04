import React from 'react';
import {
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  Platform
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Images from '../Styles/Images';
import Colors from '../Styles/Colors';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Home from "../Screens/MainScreens/Home";
import Bookings from "../Screens/MainScreens/Bookings";
import Rooms from "../Screens/MainScreens/Rooms";
import Deals from '../Screens/MainScreens/Deals';
import More from "../Screens/MainScreens/More";

const widthScreen = Dimensions.get('window').width;


type BottomStackParamList = {
  HomeTab: undefined,
  BookingsTab: undefined,
  RoomsTab: undefined,
  DealsTab: undefined,
  MoreTab: undefined,
};

type HomeStackParamList = {
  Home: undefined,
  // MyMore: undefined,
  // UsersMore: undefined,
  // CommentPost: undefined,
  // Earnings: undefined
};
type BookingsStackParamList = {
  Bookings: undefined,
};
type RoomsStackParamList = {
  Rooms: undefined,
};
type DealsStackParamList = {
  Deals: undefined,
};
type MoreStackParamList = {
  More: undefined,
};


// const navigationRef = React.createRef<any>();

// export function navigate(name: any, params: any) {
//   navigationRef.current?.navigate(name, params);
// }

const Tab = createBottomTabNavigator<BottomStackParamList>();
const HomeStack = createStackNavigator<HomeStackParamList>();
const BookingsStack = createStackNavigator<BookingsStackParamList>();
const RoomsStack = createStackNavigator<RoomsStackParamList>();
const DealsStack = createStackNavigator<DealsStackParamList>();
const MoreStack = createStackNavigator<MoreStackParamList>();


export const HomeStacks = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Home" component={Home} />
      {/* <HomeStack.Screen name="MyMore" component={MyMore} />
      <HomeStack.Screen name="UsersMore" component={UsersMore} />
      <HomeStack.Screen name="CommentPost" component={CommentPost} /> */}

    </HomeStack.Navigator>
  );
}

const BookingsStacks = () => {
  return (
    <BookingsStack.Navigator initialRouteName="Bookings"
      screenOptions={{
        headerShown: false,
      }}>
      <BookingsStack.Screen name="Bookings" component={Bookings} />

    </BookingsStack.Navigator>
  )
}

export const RoomsStacks = () => {
  return (
    <RoomsStack.Navigator initialRouteName="Rooms"
      screenOptions={{
        headerShown: false,
      }}>
      <RoomsStack.Screen name="Rooms" component={Rooms} />

    </RoomsStack.Navigator>
  );
}

const DealsStacks = () => {
  return (
    <DealsStack.Navigator initialRouteName="Deals"
      screenOptions={{
        headerShown: false,
      }}>
      <DealsStack.Screen name="Deals" component={Deals} />

    </DealsStack.Navigator>
  )
}

const MoreStacks = () => {
  return (
    <MoreStack.Navigator initialRouteName="More"
      screenOptions={{
        headerShown: false,
      }}>
      <MoreStack.Screen name="More" component={More} />

    </MoreStack.Navigator>
  )
}

export const BottomTabView = (props: any) => {
  // let unreadChatCount = props?.chat?.unreadChatCount?.count ? props?.chat?.unreadChatCount?.count : 0
  let unreadChatCount = 1
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let image;
          let name;
          if (route.name === 'HomeTab') {
            image = focused ? Images.homeBold : Images.home;
            name = 'Home';
          }
          else if (route.name === 'BookingsTab') {
            image = Images.booking;
            name = 'Bookings';
          }
          else if (route.name === 'RoomsTab') {
            image = focused ? Images.roomBold : Images.room;
            name = 'Rooms';
          }
          else if (route.name === 'DealsTab') {
            image = Images.deal;
            name = 'Deals';
          }
          else if (route.name === 'MoreTab') {
            image = Images.more;
            name = 'More';
          }
          return (
            <View style={{ alignItems: 'center', justifyContent: 'flex-start', height: Platform.OS == "android" ? hp(8) : hp(7), width: widthScreen / 5 }}>
              {/* {focused && (
                <View style={{
                  position: 'absolute',
                  top: 0,
                  height: 3,
                  width: 38,
                  backgroundColor: Colors.Green,
                  borderRadius: 4,
                }} />
              )} */}
              <Image source={image} style={{
                marginTop: hp(1.8),
                width: 24,
                height: 24,
                tintColor: focused ? Colors.DarkPink : Colors.White
              }} />
              <Text style={{
                marginTop: hp(1),
                fontFamily: "ArialNova-Bold",
                fontSize: 10,
                color: focused ? Colors.DarkPink : Colors.White
              }}>{name}</Text>
            </View>

          );
        },
        tabBarStyle: {
          height: Platform.OS == "android" ? hp(7.5) + insets.bottom : hp(10.7),
          width: widthScreen,
          alignSelf: "center",
          backgroundColor: Colors.Black,
          justifyContent: "center",
          alignItems: "center",
          position: 'absolute',
          paddingBottom: insets.bottom,
        },

        tabBarShowLabel: false
      })}>

      <Tab.Screen name="HomeTab" component={HomeStacks} />
      <Tab.Screen name="BookingsTab" component={BookingsStacks} />
      <Tab.Screen name="RoomsTab" component={RoomsStacks} />
      <Tab.Screen name="DealsTab" component={DealsStacks} />
      <Tab.Screen name="MoreTab" component={MoreStacks} />
    </Tab.Navigator>
  );
}

export default BottomTabView;