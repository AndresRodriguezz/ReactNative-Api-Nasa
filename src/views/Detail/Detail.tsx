import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const Detail = ({ route, navigation }) => {
  const { title, date, url, explanation } = route.params;
   const [value] = React.useState(route.params.title);
  useEffect(() => {
    navigation.setOptions({
      title: value,
    });
  }, [navigation, value]);

  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.image} />
      <Text style={styles.title}> {title}</Text>
      <Text style={styles.date}>{date}</Text>
      <ScrollView>
        <Text style={styles.explanation}>{explanation}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(7,26,93,255)',
    padding: 16,
  },
  image: {
    width: "100%",
    height: 300,
    borderWidth: 2,
    borderColor: "#ffff",
    borderRadius: 32,
  },
  title: {
    color: "#ffff",
    fontSize: 22,
    marginVertical: 12,
    fontWeight: "bold",
  },
  date: {
    color: "#ffff",
    fontSize: 16,
  },
  explanation: {
    color: "#ffff",
    fontSize: 16,
    marginTop: 12,
  },
});

export default Detail;
