import React, { useEffect } from "react";
import { ActivityIndicator, Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import Firebase from "../config/firebase";

const auth = Firebase.auth();

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      console.log(auth.currentUser);
      // check if they have successfully filed out their profile
      navigation.replace(
        auth.currentUser ? /*"HomeScreen"*/ "InputProfileScreen" : "AuthPath"
      );
    }, 500);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://i.pinimg.com/564x/7f/26/e7/7f26e71b2c84e6b16d4f6d3fd8a58bca.jpg",
        }}
      />
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  image: {
    width: 250,
    height: 350,
    resizeMode: "cover",
  },
});
