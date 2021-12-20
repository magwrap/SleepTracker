import AllEntriesScreen from "@/screens/App/AllEntriesScreen";
import EditEntryScreen from "@/screens/App/EditEntryScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Colors } from "react-native-paper";

interface EntriesStackNavigatorProps {}

const Stack = createNativeStackNavigator();

const EntriesStackNavigator: React.FC<EntriesStackNavigatorProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AllEntriesScreen"
        component={AllEntriesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditEntryScreen"
        component={EditEntryScreen}
        options={{
          headerStyle: { backgroundColor: Colors.blueGrey400 },
          title: "Edit Entry",
        }}
      />
    </Stack.Navigator>
  );
};

export default EntriesStackNavigator;
