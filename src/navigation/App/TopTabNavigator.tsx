import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "@/screens/App/HomeScreen";
import AllEntriesScreen from "@/screens/App/AllEntriesScreen";
import { Colors } from "react-native-paper";

interface TopTabNavigatorProps {}

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator: React.FC<TopTabNavigatorProps> = ({}) => {
  return (
    <Tab.Navigator
      initialRouteName="Tab1"
      screenOptions={{
        tabBarItemStyle: { height: 0 },
        tabBarContentContainerStyle: { height: 2 },
        tabBarIndicatorStyle: { backgroundColor: Colors.amber600 },
        tabBarStyle: { backgroundColor: "black" },
      }}>
      <Tab.Screen name="Tab1" component={HomeScreen} />
      <Tab.Screen name="Tab2" component={AllEntriesScreen} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;

//dodaj
//https://reactnavigation.org/docs/material-top-tab-navigator
