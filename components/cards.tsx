import React from "react";
import { StyleSheet } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";

const Cards = () => {
  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
  return (
    <Card style={styles.card}>
      <Card.Title
        title="Card Title"
        subtitle="Card Subtitle"
        left={LeftContent}
      />
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <Card.Actions>
        <Button>Read more</Button>
      </Card.Actions>
    </Card>
  );
};

export default Cards;

const styles = StyleSheet.create({
  card: {
    // marginHorizontal: 10,
    padding: 10,
    backgroundColor: "#dedede",
  },
});
