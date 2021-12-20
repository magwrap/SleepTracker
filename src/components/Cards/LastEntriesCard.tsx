import useRedux from "@/hooks/useRedux";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Button, DataTable, Paragraph } from "react-native-paper";
import CustomCardContainer from "../CustomCardContainer";

interface LastEntriesCardProps {}

const LastEntriesCard: React.FC<LastEntriesCardProps> = ({}) => {
  const { sleepEntries } = useRedux();
  const [sleepEntriesReversed, setSleepEntriesReversed] = React.useState(() =>
    sleepEntries.reverse().slice(0, 4)
  );

  ~useEffect(() => {
    setSleepEntriesReversed(sleepEntries.reverse().slice(0, 4));
  }, [sleepEntries]);

  const _renderItem = ({ item }: { item: SleepEntry }) => {
    const entry = item;
    const sleepDate = new Date(entry.sleepDate);
    return (
      <DataTable.Row key={entry.id}>
        <DataTable.Cell>{`${sleepDate.toDateString()}`}</DataTable.Cell>
        <DataTable.Cell numeric>
          {`${new Date(entry.timeOfSleep)
            .toLocaleTimeString()
            .slice(0, 5)} / ${new Date(entry.wakeUpTime)
            .toLocaleTimeString()
            .slice(0, 5)}`}
        </DataTable.Cell>
        <DataTable.Cell numeric>
          {`${new Date(entry.totalSleep).getHours()}h ${new Date(
            entry.totalSleep
          ).getMinutes()}min`}
        </DataTable.Cell>
      </DataTable.Row>
    );
  };

  return (
    <CustomCardContainer>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Date</DataTable.Title>
          <DataTable.Title numeric>Hours of sleep</DataTable.Title>
          <DataTable.Title numeric>Total</DataTable.Title>
        </DataTable.Header>
        {sleepEntries.length && sleepEntries ? (
          <FlatList data={sleepEntriesReversed} renderItem={_renderItem} />
        ) : (
          <Paragraph style={styles.paragraph}>No entries yet</Paragraph>
        )}
      </DataTable>
      <Button>View All </Button>
    </CustomCardContainer>
  );
};

const styles = StyleSheet.create({
  paragraph: { textAlign: "center", fontStyle: "italic" },
});

export default LastEntriesCard;
