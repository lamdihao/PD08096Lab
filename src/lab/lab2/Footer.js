import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Footer = (props) => {
  const { timeUpdate, backgroundColor } = props;
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.text}>
        Thời gian bạn cập nhật thông tin: {timeUpdate}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
  },
  text: {
    textAlign: 'center',
    color: 'black',
  },
});

export default Footer;
