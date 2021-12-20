import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
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
  const { navigate } = useNavigation();
  const goToEditEntry = () => {
    navigate("EditEntryScreen", { entryStringifed });
    // setOptions();
    // setParams({ entry });
  };

  const formatTitle = (text: string) => {
    const textArr = text.split(" ");
    let title = "";
    for (let i = 0; i < textArr.length; i++) {
      title += textArr[i];
      if (i === 1) {
        title += "\n";
      } else {
        title += " ";
      }
    }

    return title;
  };

  return (
    <View style={styles.listItem}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {formatTitle(entry.sleepDate.toDateString())}
        </Text>
      </View>
      <View
        style={[
          styles.mid,
          styles.titleContainer,
          { backgroundColor: Colors.blueGrey50 },
        ]}>
        <Text style={[styles.text, styles.time]}>
          {`${entry.timeOfSleep
            .toLocaleTimeString()
            .slice(0, 5)} / ${entry.wakeUpTime
            .toLocaleTimeString()
            .slice(0, 5)}`}
        </Text>

        <Text style={styles.text}>
          {`${entry.totalSleep.getHours()} hour${
            entry.totalSleep.getHours() !== 1 ? "s" : ""
          }\n${entry.totalSleep.getMinutes()} minute${
            entry.totalSleep.getMinutes() !== 1 ? "s" : ""
          }`}
        </Text>
      </View>

      <TouchableOpacity onPress={goToEditEntry}>
        <List.Icon
          icon="circle-edit-outline"
          style={{
            backgroundColor: Colors.blueGrey500,
            borderRadius: 25,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  listItem: {
    backgroundColor: Colors.blueGrey100,
    borderBottomWidth: 1,
    borderBottomColor: Colors.amber200,
    paddingLeft: 8,
    paddingVertical: 10,
    borderRadius: 0,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  mid: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  title: { fontWeight: "bold" },
  titleContainer: {
    backgroundColor: Colors.blueGrey500,
    padding: 10,
    borderRadius: 20,
  },
  text: {
    textAlign: "center",
  },
  time: {
    fontStyle: "italic",
  },
});

export default RenderEntry;
//
