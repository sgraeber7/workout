import React, { useState } from "react";
import { TextInput } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DismissKeyboardView from "../components/DismissKeyboardView";
import ProfileCard from "../components/ProfileCard";

const InputProfileScreen = () => {
  const [userFirstName, setUserFirstName] = useState("");
  return (
    <DismissKeyboardView>
      <SafeAreaView style={styles.container}>
        <ProfileCard />

        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            placeholder="First Name"
            placeholderTextColor="#003f5c"
            keyboardType="default"
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            value={userFirstName}
            onChangeText={(firstName) => setUserFirstName(firstName)}
            //onKeyPress={(event) => setErrortext("")}
          />
        </View>
      </SafeAreaView>
    </DismissKeyboardView>
  );
};

export default InputProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },

  inputView: {
    width: "70%",
    backgroundColor: "white",
    borderRadius: 25,
    borderColor: "black",
    borderWidth: 1,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },

  textInput: {
    height: 50,
    color: "black",
  },
});
