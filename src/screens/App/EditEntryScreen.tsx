import EditEntry from "@/components/crud/EditEntry";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Colors } from "react-native-paper";

interface EditEntryScreenProps {
  route: any;
}

const EditEntryScreen: React.FC<EditEntryScreenProps> = ({ route }) => {
  const entryStringifed = route.params.entryStringifed;
  const entry: SleepEntry = {
    id: entryStringifed.id,
    sleepDate: new Date(entryStringifed.sleepDate),
    timeOfSleep: new Date(entryStringifed.timeOfSleep),
    totalSleep: new Date(entryStringifed.totalSleep),
    wakeUpTime: new Date(entryStringifed.wakeUpTime),
  };

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
