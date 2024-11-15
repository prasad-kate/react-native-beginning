import { plusIconButtonStyles } from "@/styles/global.styles";
import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

const PlusIconButton: FC<TouchableOpacityProps> = ({ ...props }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={plusIconButtonStyles.buttonContainer}
      {...props}
    >
      <Ionicons name="add" size={32} color="black" />
    </TouchableOpacity>
  );
};

export default PlusIconButton;
