import { Button, Text, View } from 'react-native';
import { useState, useCallback } from 'react'
import ContentCallBack from './ContentCallBack';


export default function Count_useCallBack() {

    const[counter, setCounter] = useState(1)
    const[count, setCount] = useState(1)
    const handleIncrease = useCallback (() =>{
        setCounter(prevCounter => prevCounter +1)
    },[count])

    const handleIncrease2 = () =>{
        setCount(prevCount => prevCount +1)
    }
    return(

        <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
            <ContentCallBack OnIncrease={handleIncrease} />
            <Text style={{fontSize:30, fontWeight:'bold'}}>{counter}</Text>
            <Text style={{fontSize:20, fontWeight:'bold'}}>{count}</Text>
            <Button title='Click Count' onPress={handleIncrease2}></Button>
        </View>
    )
}