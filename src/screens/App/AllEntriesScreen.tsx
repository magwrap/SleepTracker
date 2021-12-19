import * as React from "react";
import { Colors, Divider, Title } from "react-native-paper";
import { StyleSheet, View } from "react-native";

interface AllEntriesScreenProps {
  navigation: any;
}

const AllEntriesScreen: React.FC<AllEntriesScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title>
        Wszystkie wpisy - flatlist - z opcją edycji / sekcje miesięczne
      </Title>
      <Divider />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.blueGrey400 },
  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 0,
  },
});

export default AllEntriesScreen;
