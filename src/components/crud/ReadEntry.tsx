import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Caption, Colors, Title, Button } from "react-native-paper";
import DatePicker from "../DatePicker";

interface ReadEntryProps {
  todaysDate: Date;
  setTodaysDate: React.Dispatch<React.SetStateAction<Date>>;
  timeOfSleep: Date;
  setTimeOfSleep: React.Dispatch<React.SetStateAction<Date>>;
  wakeUpTime: Date;
  setWakeUpTime: React.Dispatch<React.SetStateAction<Date>>;
  totalSleep: Date;
  onPressButton: () => void;
  errorMessage: string;
  buttonText?: string;
}

const ReadEntry: React.FC<ReadEntryProps> = ({
  todaysDate,
  setTodaysDate,
  timeOfSleep,
  setTimeOfSleep,
  wakeUpTime,
  setWakeUpTime,
  totalSleep,
  onPressButton,
  buttonText = "Add",
  errorMessage,
}) => {
  //TODO: włączyc disabled potem
  return (
    <View>
      <View style={styles.section}>
        <DatePicker
          mode="date"
          date={todaysDate}
          setDate={setTodaysDate}
          // disabled={true}
          des={"Date"}
        />
        <Text style={styles.text}>{todaysDate.toDateString()}</Text>
      </View>
      <View style={styles.section}>
        <DatePicker
          mode="time"
          date={timeOfSleep}
          setDate={setTimeOfSleep}
          des={"when you fell asleep"}
        />
        <Text style={styles.text}>
          {timeOfSleep.toLocaleTimeString().slice(0, 5)}
        </Text>
      </View>

      <View style={styles.section}>
        <DatePicker
          mode="time"
          date={wakeUpTime}
          setDate={setWakeUpTime}
          des={"when you woke up"}
        />
        <Text style={styles.text}>
          {wakeUpTime.toLocaleTimeString().slice(0, 5)}
        </Text>
      </View>

      <View style={styles.section}>
        <Title style={{ fontStyle: "italic" }}>You have slept for:</Title>
        <Text style={styles.text}>
          {`${totalSleep.getHours()} hours ${totalSleep.getMinutes()} minutes`}
        </Text>
      </View>
      <Button
        icon="bell-sleep"
        mode="contained"
        onPress={onPressButton}
        style={styles.button}>
        {buttonText}
      </Button>
      <View>
        <Caption>{errorMessage}</Caption>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  section: {
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 15,
    marginHorizontal: 3,
    marginBottom: 10,
    backgroundColor: Colors.white,
  },
  text: {
    textAlign: "center",
    marginBottom: 5,
    fontWeight: "700",
  },
  button: {
    borderRadius: 25,
  },
});

export default ReadEntry;
