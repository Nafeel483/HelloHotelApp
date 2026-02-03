
import React from 'react';
import { Platform } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { enableScreens } from 'react-native-screens';

import BottomTabView from "./BottomNavigation";



type RootStackParamList = {
  // Splash: undefined,
  // Onboarding: undefined,
  // Login: undefined,
  // Register: undefined,
  BottomTabView: undefined,

};

// type AuthStackParamList = {
//   Login: { value: string } | undefined,
// };


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
        {/* <RootStack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
        <RootStack.Screen name='Onboarding' component={Onboarding} options={{ headerShown: false }} />
        <RootStack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <RootStack.Screen name='Register' component={Register} options={{ headerShown: false }} /> */}
        <RootStack.Screen name='BottomTabView' component={BottomTabView} options={{ headerShown: false }} />

        {/* <RootStack.Screen name='ViewOrderDetail' component={ViewOrderDetail} options={{ headerShown: false }} /> */}
        {/* <RootStack.Screen name='StoreLocation' component={StoreLocation} options={{ headerShown: false }} /> */}



        {/* Onboarding */}
      </RootStack.Navigator>
    </NavigationContainer>

  );
}

