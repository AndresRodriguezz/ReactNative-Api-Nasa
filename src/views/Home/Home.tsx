import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../components/header";
import fetchApi from "../../utils/fetch";
import TodayImage from "../../components/TodayImage";
import { PostImage } from "../../types";
import { format, sub } from "date-fns";
import LastFiveDaysImages from "../../components/LastFiveDaysImages";

const Home = ({ navigation } ) => {
  const [todayImage, setTodayImage] = useState<PostImage>({});
  const [lastFiveDaysImages, setLastFiveDaysImages] = useState<PostImage[]>([]);

  useEffect(() => {
    const loadTodayImage = async () => {
      try {
        const todayImage = await fetchApi();
        setTodayImage(todayImage);
      } catch (error) {
        console.error(error);
        setTodayImage({});
      }
    };

    const loadLast5DaysImages = async () => {
      try {
        const date = new Date()
        const todayDate = format(date, 'yyyy-MM-dd')
        const fiveDaysAgoDate = format(sub(date,{days: 5}), 'yyyy-MM-dd')
        
        const lastFiveDaysImageResponse = await fetchApi(
          `&start_date=${fiveDaysAgoDate}&end_date=${todayDate}`,
        );
        setLastFiveDaysImages(lastFiveDaysImageResponse)
      } catch (error) {
        console.error(error)
      }
    }

    loadTodayImage().catch(null);
    loadLast5DaysImages().catch(null)
  }, []);

  return (
    <View style={style.container}>
      <Header />
      <TodayImage postImage={todayImage} navigation={navigation}/>
      <LastFiveDaysImages postImages={lastFiveDaysImages} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 14,
    backgroundColor: 'rgba(7,26,93,255)',
  },
});

export default Home;
