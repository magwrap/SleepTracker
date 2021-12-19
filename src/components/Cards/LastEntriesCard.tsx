import React from "react";
import { StyleSheet } from "react-native";
import { Avatar, Button, Card, Paragraph, Title } from "react-native-paper";
import CustomCardContainer from "../CustomCardContainer";

interface LastEntriesCardProps {}

const LastEntriesCard: React.FC<LastEntriesCardProps> = ({}) => {
  const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />;
  return (
    <CustomCardContainer>
      <Card.Title
        title="Card Title"
        subtitle="Card Subtitle"
        left={LeftContent}
      />
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

export default LastEntriesCard;
