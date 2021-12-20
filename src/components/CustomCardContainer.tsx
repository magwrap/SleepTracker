import React from "react";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";

interface CustomCardContainerProps {
  children: React.ReactNode;
}

const CustomCardContainer: React.FC<CustomCardContainerProps> = ({
  children,
}) => {
  return <Card style={styles.cardContainer}>{children}</Card>;
};
const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 20,
    marginHorizontal: 25,
    height: "43%",
    borderRadius: 20,
  },
});

export default CustomCardContainer;
