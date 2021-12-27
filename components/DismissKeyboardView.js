import React from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

const DismissKeyboardView = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default DismissKeyboardView;
