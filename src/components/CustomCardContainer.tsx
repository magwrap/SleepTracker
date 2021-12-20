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
    height: "44%",
    borderRadius: 20,
    borderWidth: 7,
  },
});

export default CustomCardContainer;
