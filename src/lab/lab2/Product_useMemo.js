import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState, useMemo } from "react";


export default function Product_useMemo() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])
    const handelSubmit = () => {
        setProducts([...products,{
            name,
            price: parseInt(price)
        }])
    }
    // const total = products?.reduce((result,prod)=>{
    //     console.log('Tinh tong...');
    //     return result + prod.price
    // },0)
    const total = useMemo(()=>{
        const result =  products?.reduce((result, prod)=>{
            console.log('Tinh tong...');
            return result + prod.price;
        },0)
       return result;
    },[products])
    
    // console.log(products)
    return(
        <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
            <TextInput value={name} onChangeText={setName} style={styles.input} placeholder="input name"/>
            <TextInput value={price} onChangeText={setPrice} style={styles.input} placeholder="input price"/>
            <Button title='Them' onPress={handelSubmit}/>
            <Text>Tong gia:{total}</Text>
            <View>
                {products?.map((prod,index)=>(
                    <Text key={index}>{prod.name} - {prod.price}</Text>
                ))}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 320,
        marginBottom: 10,
        borderWidth: 1,
        padding: 10,
    },
});