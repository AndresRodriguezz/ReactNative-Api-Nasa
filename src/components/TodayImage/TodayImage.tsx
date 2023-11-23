import React, { FC } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

import { PostImage } from "../../types";

const TodayImage: FC<{ postImage: PostImage; navigation: any }> = ({
  postImage,
  navigation,
}) => {
  const handleViewPress = () => {
    navigation.navigate("Detail", postImage, navigation);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: postImage.url }} style={styles.image} />
      <Text style={styles.title}>{postImage.title}</Text>
      <Text style={styles.date}>{postImage.date}</Text>
      <View style={styles.buttonContainer}>
        <Button title="View" onPress={handleViewPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c449d",
    borderRadius: 32,
    padding: 16,
    marginTop: 8,
  },
  image: {
    width: "100%",
    height: 190,
    borderWidth: 2,
    borderColor: "#ffff",
    borderRadius: 32,
  },
  title: {
    color: "#ffff",
    fontSize: 20,
    marginVertical: 12,
    fontWeight: "bold",
  },
  date: {
    color: "#ffff",
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: "flex-end",
  },
});

export default TodayImage;
