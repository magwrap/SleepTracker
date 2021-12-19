import Center from "@/components/Center";
import React from "react";
import { StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";

interface LoadingScreenProps {}

const LoadingScreen: React.FC<LoadingScreenProps> = ({}) => {
  return (
    <Center>
      <ActivityIndicator size="large" />
    </Center>
  );
};
const styles = StyleSheet.create({});

export default LoadingScreen;
