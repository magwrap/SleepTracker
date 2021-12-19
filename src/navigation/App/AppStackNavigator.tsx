import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TopTabNavigator from "./TopTabNavigator";

interface AppStackNavigatorProps {}

const Stack = createNativeStackNavigator();

const AppStackNavigator: React.FC<AppStackNavigatorProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={TopTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
