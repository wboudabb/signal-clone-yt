import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import { Button } from "react-native-elements";
import { KeyboardAvoidingView } from "react-native";
import { StyleSheet, View } from "react-native";
import { Image, Input } from "react-native-elements";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = {};

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Signal-Logo.svg/240px-Signal-Logo.svg.png",
        }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input
          keyboardType="email-address"
          keyboardAppearance="dark"
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View>
        <Button
          title="Login"
          containerStyle={styles.button}
          onPress={() => navigation.navigate("Register")}
        />
        <Button
          title="Register"
          containerStyle={styles.button}
          type="outline"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
      <View style={{ height: 200 }} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: { width: 300 },
  button: { width: 300, marginTop: 10 },
});
