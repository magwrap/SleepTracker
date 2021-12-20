import * as React from "react";
import { Caption, Colors, Paragraph, Title } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import useRedux from "@/hooks/useRedux";
import { FlatList } from "react-native-gesture-handler";
import RenderEntry from "@/components/AllEntries/RenderEntry";
import { useEffect } from "react";

interface AllEntriesScreenProps {
  navigation: any;
}

const AllEntriesScreen: React.FC<AllEntriesScreenProps> = ({ navigation }) => {
  const { sleepEntries, storeEntries } = useRedux();
  const [sleepEntriesReversed, setSleepEntriesReversed] = React.useState(() =>
    sleepEntries.reverse()
  );

  ~useEffect(() => {
    storeEntries();
    setSleepEntriesReversed(sleepEntries.reverse());
  }, [sleepEntries]);

  const _renderItem = ({ item }: { item: SleepEntry }) => {
    return <RenderEntry entryStringifed={item} />;
  };
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Your entries</Title>

      <View style={styles.tableContainer}>
        <Paragraph style={styles.tableTitle}>Date</Paragraph>

        <Paragraph style={styles.tableTitle}>Hours of sleep</Paragraph>

        <Paragraph style={styles.tableTitle}>Total</Paragraph>

        <Paragraph style={styles.tableTitle}>Edit</Paragraph>
      </View>
      <View style={{ width: "100%", marginTop: 2, borderBottomWidth: 1 }} />

      {sleepEntries.length && sleepEntries ? (
        <FlatList
          data={sleepEntriesReversed}
          renderItem={_renderItem}
          keyExtractor={(entry: SleepEntry) => entry.id.toString()}
        />
      ) : (
        <View style={{ alignItems: "center" }}>
          <Caption>No entries found...</Caption>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blueGrey400,
  },
  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 0,
  },
  title: {
    alignItems: "center",
    textAlign: "center",
    padding: 10,
    fontSize: 25,
    fontStyle: "italic",
    color: Colors.white,
  },
  tableContainer: {
    flexDirection: "row",

    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  tableTitle: {
    maxWidth: "40%",
  },
});

export default AllEntriesScreen;
