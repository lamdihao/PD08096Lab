import React, { memo } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Header = memo((props) => {
  const { user } = props;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: user?.avatar }}
        resizeMode="center"
        style={styles.avatar}
      />
      <View style={styles.textContainer}>
        <Text>Chào ngày mới</Text>
        <Text style={styles.userName}>{user?.name}</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  textContainer: {
    marginStart: 10,
  },
  userName: {
    color: 'black',
  },
});

export default Header;
