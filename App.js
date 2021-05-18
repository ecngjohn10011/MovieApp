import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MovieContextProvider from "./AppContext";
import { AntDesign } from "@expo/vector-icons";

//Navigation imports
import {
  NavigationContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Screens
import SettingsScreen from "./screens/SettingsScreen";
import BrowseScreen from "./screens/BrowseScreen";
import SearchScreen from "./screens/SearchScreen";
import LoginScreen from "./screens/LoginScreen";



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#abd",
    alignItems: "center",
    justifyContent: "center",
  },
});

const BrowsingStack = createStackNavigator();

BroSearchScreen = () => {
  return (
    <BrowsingStack.Navigator
      initialRouteName="Browse"
      screenOptions={{
        headerStyle: { backgroundColor: "#2299ff" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "normal" },
      }}
    >
      <BrowsingStack.Screen name="Browse Movies" component={BrowseScreen} />
      <BrowsingStack.Screen name="Searches" component={SearchScreen} />
    </BrowsingStack.Navigator>
  );
};

const Tabs = createBottomTabNavigator();

MainTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconColor;

          if (route.name === "Browse") 
          {
            iconColor = focused ? "blue" : "grey";
            return <AntDesign name="home" size={size} color={iconColor} />;
          } 
          else if (route.name === "Settings") {
            iconName = focused ? "ios-list-box" : "ios-list";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "blue",
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="Browse" component={BroSearchScreen} />
      <Tabs.Screen name="Settings" component={SettingsScreen} />
    </Tabs.Navigator>
  );
};

const Stack = createStackNavigator();

AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={({ route }) => ({
            headerShown: false,
          })}
        />
        <Stack.Screen name="Login" component={LoginScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
      <AppNavigator />
  );
}
