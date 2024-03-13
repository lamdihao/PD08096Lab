import React from 'react';
import { Text, View, Button } from 'react-native';
import { useState } from 'react';
import ContentMemo from './ContentMemo';

export default function CountMemo() {
  const [counter, setCounter] = useState(1);
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  const handleIncrease2 = () => {
    setCount(count + 1);
  };

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <ContentMemo count={count} />
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{counter}</Text>
      <Button title="Click Counter" onPress={handleIncrease} />
      <Button title="Click Count" onPress={handleIncrease2} />
    </View>
  );
}
