import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

export const UserType = {
  name: 'string',
  avatar: 'string',
};

const colorFooter = [
  'white',
  '#FF6666',
  '#33FF00',
  '#FF99FF',
  '#D1FAD7',
  '#00FFFF',
  '#FAD3D1',
];

const Main = () => {
  const [user, setUser] = useState({
    name: 'No name yet',
    avatar: 'https://tse4.mm.bing.net/th?id=OIP.VTvwunTv2ldMjMr6RuSOUgAAAA&pid=Api&P=0&h=180',
  });

  const [lastTimeUpdate, setLastTimeUpdate] = useState(
    `You haven't updated your information`,
  );
  const [footerColor, setFooterColor] = useState(colorFooter[0]);

  // Update informations account
  const handleUpdateInfor = useCallback((_user) => {
    setUser(_user);
  }, []);

  // Functions random backgroundColor footer
  const handleRamColor = useCallback(() => {
    const numberRandom = Math.floor(Math.random() * colorFooter.length);
    setFooterColor(colorFooter[numberRandom]);
  }, []);

  // Informations user update, update time update
  useEffect(() => {
    const currentDate = new Date();
    const dataTime =
      currentDate.getDate() +
      '/' +
      (currentDate.getMonth() + 1) +
      '/' +
      currentDate.getFullYear() +
      '   ' +
      currentDate.getHours() +
      ' : ' +
      currentDate.getMinutes() +
      ' : ' +
      currentDate.getSeconds();
    setLastTimeUpdate(dataTime);
  }, [user]);

  return (
    <SafeAreaView style={styles.container}>
      <Header user={user} />
      <Body
        onClickChangeBgFooter={handleRamColor}
        onUpdateInfor={handleUpdateInfor}
      />
      <Footer timeUpdate={lastTimeUpdate} backgroundColor={footerColor} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
});

export default Main;
