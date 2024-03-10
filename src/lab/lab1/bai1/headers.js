// CustomHeader.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

const CustomHeader = ({ title, leftIcon, rightIcon }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.iconContainer}>
      {leftIcon && <Image 
          style={{ width: 20, height: 20 }}
          source={require('../../../assets/images/left-arrows.png')} ></Image>}
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.iconContainer}>
       
        {rightIcon && <Image 
          style={{ width: 20, height: 20 }}
          source={require('../../../assets/images/avatar.png')} ></Image>}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    height: 60,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  iconContainer: {
    width: 40,
    alignItems: "center",
  },
});

export default CustomHeader;