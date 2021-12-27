import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { selectProfile } from "../slices/profileSlice";
import Picker from "@gregfrench/react-native-wheel-picker";
var PickerItem = Picker.Item;

const ProfileCard = () => {
  const [userEmail, setUserEmail] = useState(selectProfile.email);
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userAge, setUserAge] = useState(0);
  const [userPrimarySport, setUserPrimarySport] = useState("");
  const [selectedItem, setSelectedItem] = useState(2);
  const [itemList, setItemList] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]);

  return (
    <View style={styles.container}>
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
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Last Name"
          placeholderTextColor="#003f5c"
          keyboardType="default"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={userLastName}
          onChangeText={(lastName) => setUserLastName(lastName)}
          //onKeyPress={(event) => setErrortext("")}
        />
      </View>
      <View>
        <Picker
          style={{ width: 150, height: 180 }}
          lineColor="#000000" //to set top and bottom line color (Without gradients)
          lineGradientColorFrom="#008000" //to set top and bottom starting gradient line color
          lineGradientColorTo="#FF5733" //to set top and bottom ending gradient
          selectedValue={selectedItem}
          itemStyle={{ color: "white", fontSize: 26 }}
          onValueChange={(index) => setSelectedItem(index)}
        >
          {itemList.map((value, i) => (
            <PickerItem label={value} value={i} key={i} />
          ))}
        </Picker>
      </View>
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
          defaultValue={userEmail}
          onChangeText={(email) => setUserEmail(email)}
          //onKeyPress={(event) => setErrortext("")}
        />
      </View>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "coloumn",
    backgroundColor: "black",
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
