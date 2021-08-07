import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";

import { Button, SafeAreaViewBase,TextInput,Alert,ScrollView,Image,SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  return (
   <SafeAreaView style={styles.container}>
    {/* //text// */}
     <Text >Hello World !</Text>
     <Button 
     title= "Click me" />
    <TextInput
        style={styles.input}
        onChangeText={(value) => setName(value)}
        placeholder="Enter your name ..."
      />
        <TextInput
        style={styles.input}
        onChangeText={(value) => setAddress(value)}
        placeholder="Enter your address ..."
      />
      <Text style={styles.text}>Your name is: {name}</Text>
      <Text style={styles.address}>Your address is: {address}</Text>
      
   </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
flex:1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'center',
  
  },
 
  input: {
    height: 40,
    width: "90%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
