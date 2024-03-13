import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';

const MovingSquareApp = () => {
  const offset = useSharedValue({ x: Math.random() * 200, y: Math.random() * 200 });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: offset.value.y }, { translateX: offset.value.x }],
    };
  });

  const onMovePress = () => {
    offset.value = withSpring(
      { x: Math.random() * 200, y: Math.random() * 200 },
      { damping: 2, stiffness: 80, easing: Easing.inOut(Easing.ease) }
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View
        style={[
          {
            width: 50,
            height: 50,
            backgroundColor: 'blue',
          },
          animatedStyle,
        ]}
      />
      <TouchableOpacity onPress={onMovePress} style={{ marginTop: 20 }}>
        <View
          style={{
            padding: 10,
            backgroundColor: 'lightblue',
            borderRadius: 5,
          }}
        >
          <Text>Move</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MovingSquareApp;
