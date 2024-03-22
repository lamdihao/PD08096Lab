import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Lab1Screen from "./src/lab/lab1/lab1_home";
import Bai1 from "./src/lab/lab1/bai1/bai1";
import Bai2 from "./src/lab/lab1/bai2";

// import Student from './components/student';
import Bai3Lab1 from './src/lab/lab1/bai3/index';
import Counter from "./src/lab/lab2/Counter";
import Lab2Screen from "./src/lab/lab2/lab2_home";
import Lab3Screen from "./src/lab/lab3/lab3_home";
import Lab4Screen from "./src/lab/lab4/lab4_home";
import CountDown from "./src/lab/lab2/CountDown";
import CountMemo from "./src/lab/lab2/CountMemo";
import ContentMemo from "./src/lab/lab2/ContentMemo";
import Count_useCallBack from "./src/lab/lab2/Count_useCallBack";
import Product_useMemo from "./src/lab/lab2/Product_useMemo";
import UseContextScreen from "./src/lab/lab2/Provider_useContext";
import Main from "./src/lab/lab2/Main";
import Lab3Bai1 from "./src/lab/lab3/bai1";
import Lab3Bai2 from "./src/lab/lab3/bai2/app";
import Bai3Lab3 from './src/lab/lab3/bai3/index';
import ChupAnh from "./src/lab/lab4/cameraAccess";
import ChonAnh from "./src/lab/lab4/chonAnh";
import NgheNhac from "./src/lab/lab4/nghenhac";


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
        options={{ title: "Bài 2 Lab 1" }}
      />
      <Stack.Screen
        name="bai1lab3"
        component={Lab3Bai1}
        options={{ title: "Lab3 Bai1" }}
      />
      <Stack.Screen
        name="main"
        component={Main}
        options={{ title: "Lab2" }}
      />
      <Stack.Screen
        name="counter"
        component={Counter}
        options={{ title: "Counter" }}
      />
      <Stack.Screen
        name="countDown"
        component={CountDown}
        options={{ title: "CountDown" }}
      />
      <Stack.Screen
        name="countMemo"
        component={CountMemo}
        options={{ title: "CountMemo" }}
      />
      <Stack.Screen
        name="countCallBack"
        component={Count_useCallBack}
        options={{ title: "CountCallBack" }}
      />
      <Stack.Screen
        name="productUseMemo"
        component={Product_useMemo}
        options={{ title: "Product_useMemo" }}
      />
      <Stack.Screen
        name="useContextScreen"
        component={UseContextScreen}
        options={{ title: "UseContextScreen" }}
      />
      <Stack.Screen
        name="bai2lab3"
        component={Lab3Bai2}
        options={{ title: "Lab3 Bai2" }}
      />
      <Stack.Screen
        name="bai3lab3"
        component={Bai3Lab3}
        options={{ title: "Lab3 Bai3" }}
      />
       <Stack.Screen
        name="chupanh"
        component={ChupAnh}
        options={{ title: "Chup anh" }}
      />
      <Stack.Screen
        name="chonanh"
        component={ChonAnh}
        options={{ title: "Chon anh" }}
      />
      <Stack.Screen
        name="nghenhac"
        component={NgheNhac}
        options={{ title: "Nghe nhac" }}
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