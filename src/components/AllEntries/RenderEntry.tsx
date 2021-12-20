import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors, List } from "react-native-paper";

interface RenderEntryProps {
  entryStringifed: SleepEntry;
}

const RenderEntry: React.FC<RenderEntryProps> = ({ entryStringifed }) => {
  const entry: SleepEntry = {
    id: entryStringifed.id,
    sleepDate: new Date(entryStringifed.sleepDate),
    timeOfSleep: new Date(entryStringifed.timeOfSleep),
    totalSleep: new Date(entryStringifed.totalSleep),
    wakeUpTime: new Date(entryStringifed.wakeUpTime),
  };
  console.log("entry:", entryStringifed.id);
  const { navigate } = useNavigation();
  const goToEditEntry = () => {
    navigate("EditEntryScreen", { entry });
    // setOptions();
    // setParams({ entry });
  };
  return (
    <List.Item
      style={styles.listItem}
      title={entry.sleepDate.toDateString()}
      description={`time of sleep: ${entry.timeOfSleep
        .toLocaleTimeString()
        .slice(0, 5)} wake up time ${entry.wakeUpTime
        .toLocaleTimeString()
        .slice(
          0,
          5
        )}\ntotal sleep: ${entry.totalSleep.getHours()} hours ${entry.totalSleep.getMinutes()} minutes`}
      right={(props) => (
        <TouchableOpacity onPress={goToEditEntry}>
          <List.Icon {...props} icon="circle-edit-outline" />
        </TouchableOpacity>
      )}
    />
  );
};
const styles = StyleSheet.create({
  listItem: {
    backgroundColor: Colors.amber100,
    marginBottom: 2,
  },
});

export default RenderEntry;
