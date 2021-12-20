import React from "react";
import { LayoutChangeEvent, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

interface CustomCardContainerProps {
  children: React.ReactNode;
  onLayoutHandler?: (event: LayoutChangeEvent) => void;
}

const CustomCardContainer: React.FC<CustomCardContainerProps> = ({
  children,
  onLayoutHandler,
}) => {
  return (
    <Card style={cardContainerStyles.cardContainer} onLayout={onLayoutHandler}>
      {children}
    </Card>
  );
};
export const cardContainerStyles = StyleSheet.create({
  cardContainer: {
    marginVertical: 15,
    marginHorizontal: 25,
    height: "44%",
    borderRadius: 20,
    borderWidth: 7,
  },
});

export default CustomCardContainer;
