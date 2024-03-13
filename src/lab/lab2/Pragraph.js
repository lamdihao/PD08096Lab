import { Text, View } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "./Provider_useContext";


export default function Paragraph() {
    const theme = useContext(ThemeContext)
    return(
        <View style={{backgroundColor:theme==="light" ? 'white':'gray'}}>
            <Text style={{fontSize:15}}>Demo change theme react native Hook useContext</Text>
            <Text style={{fontSize:15}}>Demo change theme react native Hook useContext</Text>
            <Text style={{fontSize:15}}>Demo change theme react native Hook useContext</Text>
            <Text style={{fontSize:15}}>Demo change theme react native Hook useContext</Text>
            <Text style={{fontSize:15}}>Demo change theme react native Hook useContext</Text>
        </View>
    )
}