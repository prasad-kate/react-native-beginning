import { ButtonProps } from "@/.expo/types";
import { uiStyles } from "@/styles/global.styles";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Button: React.FC<ButtonProps> = ({
  text,
  onPress,
  icon,
  iconSize = 24,
  iconColor = "#000",
  ...props
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={uiStyles.button}
      onPress={onPress}
      {...props}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {icon && <Ionicons name={icon} size={iconSize} color={iconColor} />}
        {text && <Text style={uiStyles.buttonText}>{text}</Text>}{" "}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
