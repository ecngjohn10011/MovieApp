import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const SettingsStack = createStackNavigator();

function B() {
  return (
    <View>
      <Text>Settings coming soon.</Text>
    </View>
  );
}

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#2299ff" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "normal" },
      }}
    >
      <SettingsStack.Screen
        name="Settings"
        component={B}
        options={{ tabBarLabel: "Settings!" }}
      />
    </SettingsStack.Navigator>
  );
}

export default SettingsStackScreen;
