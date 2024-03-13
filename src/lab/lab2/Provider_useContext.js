import { Button, Text, View } from "react-native";
import { useState, createContext } from "react";
import Paragraph from "./Pragraph";

export const ThemeContext = createContext('light')

export default function UseContextScreen() {
    const [theme, setTheme] = useState('light')
    const handelToggleTheme = () =>{
        setTheme(theme === 'dark'?'light':'dark')
    }
    return(
        <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
            <ThemeContext.Provider value={theme}>
                <Text style={{fontSize:30}}>UseContextScreen</Text>
                <Button title='Change theme' onPress={handelToggleTheme}></Button>
                <Paragraph/>
            </ThemeContext.Provider>
        </View>
    )
}