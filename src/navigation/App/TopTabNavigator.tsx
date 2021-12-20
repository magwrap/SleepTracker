import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "@/screens/App/HomeScreen";

import { Colors } from "react-native-paper";
import EntriesStackNavigator from "./EntriesStackNavigator";

interface TopTabNavigatorProps {}

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator: React.FC<TopTabNavigatorProps> = ({}) => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarItemStyle: { height: 0 },
        tabBarContentContainerStyle: { height: 2 },
        tabBarIndicatorStyle: { backgroundColor: Colors.amber600 },
        tabBarStyle: { backgroundColor: "black" },
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen
        name="EntriesStackNavigator"
        component={EntriesStackNavigator}
      />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;

//dodaj
//https://reactnavigation.org/docs/material-top-tab-navigator
