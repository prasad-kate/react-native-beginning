import { plusIconButtonStyles } from "@/styles/global.styles";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";

const PlusIconButton = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={plusIconButtonStyles.buttonContainer}
    >
      <Ionicons name="add" size={32} color="black" />
    </TouchableOpacity>
  );
};

export default PlusIconButton;
