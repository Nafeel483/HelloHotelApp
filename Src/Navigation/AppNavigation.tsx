
import React from 'react';
import { Platform } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { enableScreens } from 'react-native-screens';

import BottomTabView from "./BottomNavigation";
import DealCheckOut from '../Screens/MainScreens/DealCheckOut';


type RootStackParamList = {
  BottomTabView: undefined,
  DealCheckOut: undefined,

};

enableScreens();


const RootStack = createStackNavigator<RootStackParamList>();

export const setNavigator = (nav: any) => {
  const navigator = nav;
};


export default function RootNavigator() {
  return (

    <NavigationContainer>
      <RootStack.Navigator initialRouteName="BottomTabView"
        screenOptions={{
          headerShown: false,
        }}>
        
        <RootStack.Screen name='BottomTabView' component={BottomTabView} options={{ headerShown: false }} />
        <RootStack.Screen name='DealCheckOut' component={DealCheckOut} options={{ headerShown: false }} />
        {/* <RootStack.Screen name='StoreLocation' component={StoreLocation} options={{ headerShown: false }} /> */}



      </RootStack.Navigator>
    </NavigationContainer>

  );
}

