import React, { useState } from "react";
import { LayoutChangeEvent, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors, IconButton, Modal, Portal, Text } from "react-native-paper";
import CharKit from "../CharKit";
import { cardContainerStyles } from "../CustomCardContainer";

interface EntriesGraphCardProps {}
//TODO: https://github.com/indiespirit/react-native-chart-kit
const EntriesGraphCard: React.FC<EntriesGraphCardProps> = ({}) => {
  const [charKitWidth, setCharKitWidth] = useState(0);
  const [charKitHeight, setCharKitHeight] = useState(0);
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const onLayoutHandler = (event: LayoutChangeEvent) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    setCharKitWidth(width);
    setCharKitHeight(height);
  };
  return (
    <>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.container}>
          <CharKit />
        </Modal>
      </Portal>
      <View
        onLayout={onLayoutHandler}
        style={[cardContainerStyles.cardContainer, styles.charKit]}>
        <TouchableOpacity onPress={showModal}>
          <CharKit width={charKitWidth} height={charKitHeight} />
        </TouchableOpacity>
      </View>
    </>
  );
};

const zIndex = 999;
const styles = StyleSheet.create({
  charKit: { borderWidth: 0 },
  container: {
    borderRadius: 25,
  },

  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 3,
  },
});

export default EntriesGraphCard;
