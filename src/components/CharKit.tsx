import useRedux from "@/hooks/useRedux";
import React from "react";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Colors } from "react-native-paper";

interface CharKitProps {
  width?: number;
  height?: number;
}

const CharKit: React.FC<CharKitProps> = ({
  width = Dimensions.get("window").width,
  height = 300,
}) => {
  const { sleepEntries } = useRedux();
  const convertToDateObjects = (sleepEntries: SleepEntriesState) => {
    return sleepEntries.map((entry: SleepEntry) => ({
      id: entry.id,
      sleepDate: new Date(entry.sleepDate),
      timeOfSleep: new Date(entry.timeOfSleep),
      wakeUpTime: new Date(entry.wakeUpTime),
      totalSleep: new Date(entry.totalSleep),
    }));
  };

  const extractLabels = (sleepEntries: SleepEntriesState) => {
    return sleepEntries.map((entry: SleepEntry) =>
      entry.sleepDate.getDate().toString()
    );
  };

  const extractData = (sleepEntries: SleepEntriesState) => {
    return sleepEntries.map((entry: SleepEntry) => {
      const time = entry.totalSleep.getTime() * 2.77777778 * Math.pow(10, -7);
      return time > 0 ? time : 24 + time;
    });
  };

  const dateSleepEntries = sleepEntries
    ? convertToDateObjects(sleepEntries)
    : [];
  const labels = extractLabels(dateSleepEntries);
  const data = extractData(dateSleepEntries);
  console.log(data);

  return (
    <LineChart
      data={{
        labels: labels,
        datasets: [
          {
            data: data,
          },
        ],
      }}
      width={width} // from react-native
      height={height + 10}
      yAxisSuffix="h"
      yAxisInterval={1} // optional, defaults to 1
      chartConfig={{
        backgroundColor: Colors.blueGrey500,
        backgroundGradientFrom: Colors.blueGrey700,
        backgroundGradientTo: Colors.blueGrey500,
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16,
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: Colors.black,
        },
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    />
  );
};

export default CharKit;
