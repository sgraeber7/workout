import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { createRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import DismissKeyboardView from "../components/DismissKeyboardView";
import ForgotPasswordScreen from "./ForgotPasswordScreen";
import SignupScreen from "./SignupScreen";
import ErrorMessage from "../components/ErrorMessage";
import Firebase from "../config/firebase";
import { useDispatch } from "react-redux";
import { login } from "../slices/profileSlice";

const auth = Firebase.auth();

const LoginScreen = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errortext, setErrortext] = useState("");

  const dispatch = useDispatch();

  const handleLogin = () => {
    /*try {
      if (email !== "" && password !== "") {
        await auth.signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      setLoginError(error.message);
    }*/

    setErrortext("");
    if (!userEmail) {
      alert("Please fill Email");
      return;
    }
    if (!userPassword) {
      alert("Please fill Password");
      return;
    }
    // do client side checking

    auth
      .signInWithEmailAndPassword(userEmail, userPassword)
      .then((user) => {
        //console.log(user);
        dispatch(login());
        // If server response message same as Data Matched
        if (user) navigation.replace("HomeScreen");
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/invalid-email") setErrortext(error.message);
        else if (error.code === "auth/user-not-found")
          setErrortext("No User Found");
        else {
          setErrortext("Please check your email id or password");
        }
      });
  };

  return (
    <DismissKeyboardView>
      <View style={styles.container}>
        <Text style={styles.workoutText}>WORKOUT</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            value={userEmail}
            onChangeText={(email) => setUserEmail(email)}
            onKeyPress={(event) => setErrortext("")}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            secureTextEntry={true}
            textContentType="password"
            value={userPassword}
            onChangeText={(password) => setUserPassword(password)}
            onKeyPress={(event) => setErrortext("")}
          />
        </View>
        {errortext != "" ? (
          <Text style={styles.errorText}> {errortext} </Text>
        ) : null}

        <TouchableOpacity
          onPress={() => navigation.navigate(ForgotPasswordScreen)}
        >
          <Text style={styles.forgotButton}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signupBtn}
          onPress={() => navigation.navigate("SignupScreen")}
        >
          <Text style={styles.signupText}>SIGNUP</Text>
        </TouchableOpacity>
      </View>
    </DismissKeyboardView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  workoutText: {
    fontWeight: "bold",
    fontSize: 60,
    color: "#fb5b5a",
    marginBottom: 55,
  },

  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    marginBottom: 40,
  },

  inputView: {
    width: "70%",
    backgroundColor: "orange",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },

  forgotButton: {
    height: 30,
    marginBottom: 30,
    color: "white",
  },

  textInput: {
    height: 50,
    color: "black",
  },

  signupText: {
    color: "white",
  },

  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 30,
  },

  signupBtn: {
    width: "80%",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "white",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },

  errorText: {
    color: "red",
    fontSize: 15,
    marginBottom: 10,
  },
});
