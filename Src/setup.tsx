import React from "react";
import { View, LogBox } from "react-native";
import { useFonts } from "expo-font";
import RootNavigation from "./Navigation/AppNavigation";

LogBox.ignoreAllLogs();
LogBox.ignoreLogs(["AddInstanceForFactory"]);

export default function Root() {
  const [fontsLoaded] = useFonts({
    "ArialNova-Regular": require("../assets/Fonts/ArialNova-Light.ttf"),
    "ArialNova-Medium": require("../assets/Fonts/ArialNova.ttf"),
    "ArialNova-Bold": require("../assets/Fonts/ArialNova-Bold.ttf"),
  });
  
  // Wait until fonts are loaded before rendering navigation
  if (!fontsLoaded) {
    return null; // nothing rendered until fonts are ready
  }

  return (
    <View style={{ flex: 1 }}>
      <RootNavigation />
    </View>
  );
}


