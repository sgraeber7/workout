import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import DismissKeyboardView from "../components/DismissKeyboardView";
import Firebase from "../config/firebase";
import { signup } from "../slices/profileSlice";

const auth = Firebase.auth();

const SignupScreen = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errortext, setErrortext] = useState("");

  const dispatch = useDispatch();

  const handleSignup = () => {
    setErrortext("");
    if (!userEmail) {
      alert("Please fill Email");
      return;
    }
    if (!userPassword) {
      alert("Please fill Password");
      return;
    }
    // do client side email and password checking cause it's faster than
    //   server side validation

    auth
      .createUserWithEmailAndPassword(userEmail, userPassword)
      .then((user) => {
        console.log(user);

        if (user) {
          dispatch(signup(userEmail));
          navigation.replace("InputProfileScreen");
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/email-already-in-use") {
          setErrortext("That email address is already in use!");
        } else {
          setErrortext(error.message);
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

        <TouchableOpacity style={styles.signupBtn} onPress={handleSignup}>
          <Text>SIGNUP</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cancelBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.cancelText}>CANCEL</Text>
        </TouchableOpacity>
      </View>
    </DismissKeyboardView>
  );
};

export default SignupScreen;

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

  textInput: {
    height: 50,
    color: "black",
  },

  cancelText: {
    color: "white",
  },

  signupBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
    marginBottom: 30,
  },

  cancelBtn: {
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
