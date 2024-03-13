import { Button, Text, View } from 'react-native';
import { useState } from 'react'

export default function Counter() {
    const[counter, setCounter] = useState(1)
    const handleIncrease = () =>{
        setCounter(counter +1)
    }
    return(
        <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
            <Text style={{fontSize:30, fontWeight:'bold'}}>{counter}</Text>
            <Button title='Click' onPress={handleIncrease}></Button>
        </View>
    )
}