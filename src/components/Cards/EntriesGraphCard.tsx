import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Card, Paragraph, Title } from "react-native-paper";
import CustomCardContainer from "../CustomCardContainer";

interface EntriesGraphCardProps {}

const EntriesGraphCard: React.FC<EntriesGraphCardProps> = ({}) => {
  return (
    <CustomCardContainer>
      <Card.Title title="Card Title" subtitle="Card Subtitle" />
      <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </CustomCardContainer>
  );
};
const styles = StyleSheet.create({});

export default EntriesGraphCard;
