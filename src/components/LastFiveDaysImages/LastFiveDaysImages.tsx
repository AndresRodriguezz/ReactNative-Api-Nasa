import React, { FC } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { PostImage as PostImageTypes } from "../../types";
import PostImage from "../PostImage";

const lastFiveDaysImage: FC<{ postImages?: PostImageTypes[] }> = ({
  postImages,
}) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Last 5 Days</Text>
      <ScrollView style={style.content}>
        {postImages?.map((postImage) => (
          <PostImage key={`post-image-${postImage.title}`} {...postImage} />
        ))}
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
  },
  title: {
    color: "#ffff",
    fontSize: 20,
    marginVertical: 12,
    fontWeight: "bold",
  },
  content: {
    padding: 4
  },
});

export default lastFiveDaysImage;
