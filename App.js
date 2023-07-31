import { StyleSheet, Text, View, Image, TextInput,Button, Alert} from 'react-native';
import React, { useState } from 'react';

export default function App() {
const [s1,setS1]=useState("");
const [s2,setS2]=useState("");
const [result,setResult]=useState("");
const topla=()=>{
  const sum=Number(s1)*Number(s2)
setResult(`Çarpma sonucu: ${sum}`)
}
  return (
    <View style={styles.container}>      
      <TextInput placeholder="Sayı 1" style={styles.input} value={s1} keyboardType='numeric' onChangeText={text=>setS1(text)} />
      <TextInput placeholder='Sayı 2' style={styles.input} value={s2} keyboardType='numeric' onChangeText={text=>setS2(text)}/>
      <Button
        title="Çarp"
        onPress={() =>topla()}
      />
      <Text>{result}</Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
