import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, FAB, Modal, Portal } from "react-native-paper";

interface AddEntryScreenProps {}

const AddEntryScreen: React.FC<AddEntryScreenProps> = ({}) => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20, margin: 20 };
  return (
    <View style={{ flex: 1 }}>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}>
          <Button onPress={hideModal}>Hide</Button>
          <Text>Example Modal. Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
      <FAB style={styles.fab} icon="plus" onPress={showModal} />
    </View>
  );
};

const zIndex = 999;
const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 0,
    zIndex: zIndex, // works on ios
    elevation: zIndex, // works on android
  },
});

export default AddEntryScreen;
