import { Button, Text, View } from 'react-native';
import {useState, useRef, useEffect} from 'react'

export default function CountDown() {
  
    const[counter, setCounter] = useState(1)
    const [count, setCount] = useState(30)
    let timeID = useRef()

    const handleIncrease = () =>{
        setCounter(counter +1)
    }

    const handelStart =() => {
       timeID.current = setInterval(() => {
            setCount(prevCount=>prevCount-1)
        }, 1000);
        console.log('handelStart : => ' +timeID.current);
    }

    const handelStop =()=> {
        clearInterval(timeID.current)
        console.log('handelStop : => ' +timeID.current);
    }
    useEffect(() => {
        console.log('useEfferc này chạy mỗi lần component re-render');
    })
    useEffect(() => {
        console.log('useEfferc này chạy 1 lần khi component render');
    },[])
    useEffect(() => {
        console.log('useEfferc này chạy mỗi lần khi state count này thay đổi giá trị');
    },[count])
    return(
        <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
         <Text style={{fontSize:30, fontWeight:'bold'}}>{counter}</Text>
            <Button title='Click' onPress={handleIncrease}></Button>
            <Text style={{fontSize:30, fontWeight:'bold'}}>{count}</Text>
            <Button title='Start' onPress={handelStart}></Button>
            <Button title='Stop' onPress={handelStop}></Button>
        </View>
    )
}