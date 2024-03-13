import { Text, View } from "react-native";
import { memo } from 'react'


function ContentMemo({count}) {
    console.log('ContentMemo Re-render');
   return(
    <View style={{justifyContent:'center', alignItems:'center'}}     >
        <Text style={{fontSize:40, fontWeight:'bold', color:'red'}}>React Memo {count}</Text>
    </View>
   )
    
}
export default memo(ContentMemo)