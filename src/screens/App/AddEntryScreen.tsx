import AddEntry from "@/components/crud/AddEntry";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Colors,
  FAB,
  IconButton,
  Modal,
  Portal,
  Title,
} from "react-native-paper";

interface AddEntryScreenProps {}

const AddEntryScreen: React.FC<AddEntryScreenProps> = ({}) => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <View style={{ flex: 1 }}>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.container}>
          <View style={styles.header}>
            <Title style={{ textAlign: "right" }}>Enter data:</Title>
            <IconButton onPress={hideModal} icon="close" />
          </View>

          <AddEntry hideModal={hideModal} />
        </Modal>
      </Portal>
      <FAB style={styles.fab} icon="plus" onPress={showModal} />
    </View>
  );
};

const zIndex = 999;
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blueGrey100,
    paddingHorizontal: 15,
    paddingVertical: 5,
    margin: 15,
    borderRadius: 25,
  },
  fab: {
    position: "absolute",
    margin: 30,
    right: 0,
    bottom: 0,
    zIndex: zIndex, // works on ios
    elevation: zIndex, // works on android
  },
  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 3,
  },
});

export default AddEntryScreen;
