import EditEntry from "@/components/crud/EditEntry";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Colors } from "react-native-paper";

interface EditEntryScreenProps {
  route: any;
}

const EditEntryScreen: React.FC<EditEntryScreenProps> = ({ route }) => {
  const entry = route.params.entry;

  return (
    <View style={styles.container}>
      <EditEntry entry={entry} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blueGrey300,
    padding: 10,
  },
});

export default EditEntryScreen;
