import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  //properties
  const [counter, setCouter ] = useState(0);
  const [name, setName] = useState("This is my name");
  //function
  const decreaseCounter = () => { setCouter(counter +1) ; };
  const increaseCounter = () => { setCouter(counter -1) ; };
//

  return (
    <View style={styles.container}>
     <View>
       <Text style={styles.view1}>1</Text>
     </View>
     <View>
       <Text style={styles.view2}>2</Text>
     </View>
     <View>
       <Text style={styles.view3}>3</Text>
     </View>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:"row-reverse",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view1:{
    flex: 2,
    height: 100,
    width: 100,
    backgroundColor:"#ffff00",
    alignContent:'center',
    justifyContent:'center'
  },
  view2:{
    flex: 2,
    height: 100,
    width: 100,
    backgroundColor:"#ffff00",
    alignContent:'center',
    justifyContent:'center'
  },
  view3:{
    flex: 2,
    height: 100,
    width: 100,
    backgroundColor:"#ffff00",
    alignContent:'center',
    justifyContent:'center'
  }
  
});
