import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Lab1Screen from "./src/lab/lab1/lab1_home";
import Bai1 from "./src/lab/lab1/bai1/bai1";
import Bai2 from "./src/lab/lab1/bai2";

// import Student from './components/student';
import Bai3Lab1 from './src/lab/lab1/bai3/index';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Menu">
      <Stack.Screen
        name="Menu"
        component={MenuScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Lab1"
        component={Lab1Screen}
        options={{ title: "Lab 1" }}
      />
      <Stack.Screen
        name="Lab2"
        component={Lab2Screen}
        options={{ title: "Lab 2" }}
      />
      <Stack.Screen
        name="Lab3"
        component={Lab3Screen}
        options={{ title: "Lab 3" }}
      />
      <Stack.Screen
        name="Lab4"
        component={Lab4Screen}
        options={{ title: "Lab 4" }}
      />
      <Stack.Screen
        name="Lab5"
        component={Lab5Screen}
        options={{ title: "Lab 5" }}
      />
       <Stack.Screen
        name="Lab6"
        component={Lab6Screen}
        options={{ title: "Lab 6" }}
      />
      <Stack.Screen
        name="bai1lap1"
        component={Bai1}
        options={{ title: "Bài 1 Lab 1" }}
      />
      <Stack.Screen
        name="bai2lab1"
        component={Bai2}
        options={{ title: "Bài 2 Lab 1" }}
      />
      <Stack.Screen
        name="bai3lab1"
        component={Bai3Lab1}
        options={{ title: "Lab 3" }}
      />
      {/* Thêm các màn hình cho các lab khác tại đây */}
    </Stack.Navigator>
  </NavigationContainer>
);
};

const MenuScreen = ({ navigation }) => {
return (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.labMenuItem}
      onPress={() => navigation.navigate("Lab1")}
    >
      <Text style={styles.menuText}>Lab 1</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.labMenuItem}
      onPress={() => navigation.navigate("Lab2")}
    >
      <Text style={styles.menuText}>Lab 2</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.labMenuItem}
      onPress={() => navigation.navigate("Lab3")}
    >
      <Text style={styles.menuText}>Lab 3</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.labMenuItem}
      onPress={() => navigation.navigate("Lab4")}
    >
      <Text style={styles.menuText}>Lab 4</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.labMenuItem}
      onPress={() => navigation.navigate("Lab5")}
    >
      <Text style={styles.menuText}>Lab 5</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.labMenuItem}
      onPress={() => navigation.navigate("Lab6")}
    >
      <Text style={styles.menuText}>Lab 6</Text>
    </TouchableOpacity>
    
  </View>
);
};

const Lab2Screen = () => {
return (
  <View style={styles.labScreenContainer}>
    <Text style={styles.screenText}>Lab 2 Screen</Text>
  </View>
);
};

const Lab3Screen = () => {
return (
  <View style={styles.labScreenContainer}>
    <Text style={styles.screenText}>Lab 3 Screen</Text>
  </View>
);
};
const Lab4Screen = () => {
  return (
    <View style={styles.labScreenContainer}>
      <Text style={styles.screenText}>Lab 4 Screen</Text>
    </View>
  );
  };
  const Lab5Screen = () => {
    return (
      <View style={styles.labScreenContainer}>
        <Text style={styles.screenText}>Lab 5 Screen</Text>
      </View>
    );
    };
    const Lab6Screen = () => {
      return (
        <View style={styles.labScreenContainer}>
          <Text style={styles.screenText}>Lab 6 Screen</Text>
        </View>
      );
      };

// Thêm các màn hình cho các lab khác tại đây

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f0f0f0",
},
labMenuItem: {
  marginBottom: 10,
  paddingVertical: 15,
  paddingHorizontal: 20,
  backgroundColor: "#fff",
  borderRadius: 10,
  elevation: 3,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
},
menuText: {
  fontSize: 18,
  fontWeight: "bold",
},
labScreenContainer: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fff",
},
screenText: {
  fontSize: 24,
  fontWeight: "bold",
},
});

export default App;
    // <View style={styles.container}>
    //   <Student name="Haold1" phone="0346259202" address="Da Nang"/>
    //   <Student name="Haold2" phone="0346259202" address="Da Nang"/>
    //   <Student name="Haold3" phone="0346259202" address="Da Nang"/>
    //   <Student name="Haold4" phone="0346259202" address="Da Nang"/>
    //   <Student name="Haold5" phone="0346259202" address="Da Nang"/>
    //   <StatusBar style="auto" />
    //   <Text>Lam Di Hao</Text>
    // </View>
    // <Bai1/>
    // <CounterState/>
//     <Time/>

//   );
// };
// export default App;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   });