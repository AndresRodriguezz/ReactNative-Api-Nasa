import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Header = () => {
  return (
    <View style={style.container}>
      <View style={style.leftContainer}>
        <Text style={style.title}>Explorer</Text>
      </View>
      <View style={style.rightContainer}>
        <Image
          source={require("../../assets/nasa_img.png")}
          style={style.image}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  leftContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
  rightContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  title: {
    fontSize: 20,
    color: "#ffff",
  },
  image: {
    width: 60,
    height: 60,
  },
});

export default Header;
