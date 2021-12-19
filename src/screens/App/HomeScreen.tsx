import EntriesGraphCard from "@/components/Cards/EntriesGraphCard";
import LastEntriesCard from "@/components/Cards/LastEntriesCard";
import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Colors, Title } from "react-native-paper";
import AddEntryScreen from "./AddEntryScreen";

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Title>Daily sleep tracker</Title>
      </View>
      <View style={styles.cards}>
        <LastEntriesCard />
        <EntriesGraphCard />
      </View>
      <AddEntryScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.blueGrey400, height: "100%" },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  cards: { maxHeight: "80%" },
});

export default HomeScreen;
