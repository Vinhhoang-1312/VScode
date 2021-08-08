import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import {
  Button,
  SafeAreaViewBase,
  TextInput,
  Alert,
  ScrollView,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(!submitted);
    if (submitted) {
      setName("");
      setAddress("");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World !</Text>

      <TextInput
        value={name}
        style={styles.input}
        onChangeText={(value) => setName(value)}
        placeholder="Enter your name ..."
      />
      <TextInput
        value={address}
        style={styles.input}
        onChangeText={(value) => setAddress(value)}
        placeholder="Enter your address ..."
      />
      <TouchableOpacity style={styles.Button} onPress={handleSubmit}>
        <Text style={styles.text}>{submitted ? "Clear" : "Submit"}</Text>
      </TouchableOpacity>

      {submitted ? (
        <View>
          <Text style={styles.text}>Your name is: {name}</Text>
          <Text style={styles.address}>Your address is: {address}</Text>
        </View>
      ) : (
        <Text>Nothing to show</Text>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    height: 40,
    width: "90%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  Button: {
    backgroundColor: "#00ff00",
    width: 150,
    height: 50,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
  },
});
