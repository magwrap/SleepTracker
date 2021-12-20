import useRedux from "@/hooks/useRedux";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert, View } from "react-native";
import { Button } from "react-native-paper";
import ReadEntry from "./ReadEntry";

interface EditEntryProps {
  entry: SleepEntry;
}

const EditEntry: React.FC<EditEntryProps> = ({ entry }) => {
  const [todaysDate, setTodaysDate] = useState(entry.sleepDate);
  const [wakeUpTime, setWakeUpTime] = useState(entry.wakeUpTime);
  const [timeOfSleep, setTimeOfSleep] = useState(entry.timeOfSleep);
  const [totalSleep, setTotalSleep] = useState(entry.totalSleep);
  const [errorMessage, setErrorMessage] = useState("");

  const { goBack } = useNavigation();

  const { editEntry, removeEntry, storeEntries } = useRedux();

  useEffect(() => {
    calculateTotalSleep(timeOfSleep, wakeUpTime);
  }, [timeOfSleep, wakeUpTime]);

  const calculateTotalSleep = (wakeUpTime: Date, timeOfSleep: Date) => {
    const totalSleepTime = new Date(
      timeOfSleep.getTime() - wakeUpTime.getTime()
    );
    setTotalSleep(totalSleepTime);
  };

  const onPressAdd = () => {
    if (totalSleep.getHours() > 0 || totalSleep.getMinutes() > 0) {
      editEntry({
        id: 1,
        sleepDate: todaysDate,
        timeOfSleep,
        wakeUpTime,
        totalSleep,
      });
    } else {
      setErrorMessage("You haven't slept!");
    }
  };

  const onRemove = () => {
    Alert.alert(
      "Warning!",
      `Do you really want to remove entry:\n${todaysDate.toDateString()}`,
      [
        {
          text: "No",

          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            removeEntry(entry.id);
            goBack();
          },
        },
      ]
    );
  };
  return (
    <>
      <ReadEntry
        errorMessage={errorMessage}
        onPressButton={onPressAdd}
        todaysDate={todaysDate}
        setTodaysDate={setTodaysDate}
        wakeUpTime={wakeUpTime}
        setWakeUpTime={setWakeUpTime}
        timeOfSleep={timeOfSleep}
        setTimeOfSleep={setTimeOfSleep}
        totalSleep={totalSleep}
        buttonText="Submit changes"
      />
      <View
        style={{ position: "absolute", bottom: 0, width: "100%", margin: 10 }}>
        <Button
          mode="contained"
          color="red"
          onPress={onRemove}
          style={{ borderRadius: 25 }}>
          Remove Entry
        </Button>
      </View>
    </>
  );
};

export default EditEntry;
