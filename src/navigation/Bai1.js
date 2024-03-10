import React from 'react';
import { View } from 'react-native';
import Header from '../components/Bai1CustomHeader';

const Bai1 = () => {
  return (
    <View style={{ marginTop: 30 }}>
      <Header title="Header" imageSource={require('../assets/images/avatar.png')} />
      <Header title="Trang chủ"/>
      <Header title="" />

    </View>
    
  );
};

export default Bai1;
