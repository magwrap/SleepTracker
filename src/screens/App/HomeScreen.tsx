import EntriesGraphCard from "@/components/Cards/EntriesGraphCard";
import LastEntriesCard from "@/components/Cards/LastEntriesCard";

import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Colors, Title } from "react-native-paper";
import AddEntryScreen from "./AddEntryScreen";

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar.Icon size={24} icon="sleep" />
          <Title style={styles.title}>Daily sleep tracker</Title>
          <Avatar.Icon size={24} icon="sleep" />
        </View>
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
  title: {
    fontStyle: "italic",
  },
});

export default HomeScreen;
