import { Button, Text, View } from "react-native";
import { memo } from 'react'


function ContentCallBack({OnIncrease}) {
    console.log('ContentCallBack Re-render');
   return(
    <View style={{justifyContent:'center', alignItems:'center'}}     >
        <Text style={{fontSize:40, fontWeight:'bold', color:'red'}}>React CallBack</Text>
        <Button title='Click' onPress={OnIncrease}></Button>
    </View>
   )
    
}
export default memo(ContentCallBack)