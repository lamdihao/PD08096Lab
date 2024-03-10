// MainScreen.js
import React from "react";
import { View, StyleSheet } from "react-native";
import SectionView from "./SectionView";
import SectionView2 from "./SectionView2";

const eventInfo = [
  {
    title: "Event 3",
    description: "Description for Event 3",
    address: "Hồ Tràm, Vũng Tàu",
    time: "09 : 00 AM - 12AM, 12/12/2024",
    car: "Xe bus",
    time2: "21 : 00 - 22 : 00",
    image:
      "https://i.pinimg.com/originals/80/99/e3/8099e3e9da2f909b33c84bf182d2ae1c.jpg",
  },
];

const eventInfo2 = [
  {
    name: "Hồng Quỳnh",
    time: "06 : 00 AM - 12 : 00 AM",
    address: "234 Quang Trung, Hồ Chí Minh",
  },
];
const Bai2 = () => {
  return (
    <View style={styles.container}>
      <SectionView title="Lịch trình" data={eventInfo} />
      <SectionView2 title="Khách sạn" data={eventInfo2} />
    </View>
  );
};

export default Bai2;

const styles = StyleSheet.create({
  container: {},
});