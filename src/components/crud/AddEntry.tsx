import useRedux from "@/hooks/useRedux";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Colors } from "react-native-paper";
import ReadEntry from "./ReadEntry";

interface AddEntryProps {
  hideModal: () => void;
}

const AddEntry: React.FC<AddEntryProps> = ({ hideModal }) => {
  const [todaysDate, setTodaysDate] = useState(new Date());
  const [wakeUpTime, setWakeUpTime] = useState(new Date());
  const [timeOfSleep, setTimeOfSleep] = useState(new Date());
  const [totalSleep, setTotalSleep] = useState(new Date());
  const [errorMessage, setErrorMessage] = useState("");

  const { addEntry, sleepEntries, storeEntries } = useRedux();

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
    if (
      !sleepEntries.length ||
      new Date(
        sleepEntries[sleepEntries.length - 1].sleepDate
      ).toLocaleDateString() !== todaysDate.toLocaleDateString()
    ) {
      if (totalSleep.getHours() > 0 || totalSleep.getMinutes() > 0) {
        addEntry({
          sleepDate: todaysDate,
          timeOfSleep,
          wakeUpTime,
          totalSleep,
        });

        hideModal();
      } else {
        setErrorMessage("You haven't slept!");
      }
    } else {
      setErrorMessage(
        "You have alredy added a entry today! Check all entries to edit today's one"
      );
    }
  };

  return (
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
    />
  );
};
const styles = StyleSheet.create({
  section: {
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 2,
    marginHorizontal: 3,
    marginBottom: 6,
    backgroundColor: Colors.white,
  },
  text: {
    textAlign: "center",
    marginBottom: 5,
    fontWeight: "700",
  },
});

export default AddEntry;
