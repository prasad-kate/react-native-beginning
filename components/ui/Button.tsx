import { uiStyles } from "@/styles/global.styles";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = ({ text, ...props }: { text: string }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={uiStyles.button} {...props}>
      <Text style={uiStyles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
