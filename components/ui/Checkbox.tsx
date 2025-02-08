// components/GlobalCheckbox.tsx
import { checkboxStyles } from "@/styles/global.styles";
import { GlobalCheckboxProps } from "@/types";
import { Checkbox as ExpoCheckbox } from "expo-checkbox";
import { FC } from "react";
import { Text, TouchableOpacity } from "react-native";

const Checkbox: FC<GlobalCheckboxProps> = ({
  label,
  labelStyle,
  checkboxContainerStyles,
  value = false,
  onLabelPress,
  onValueChange,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={{
        ...checkboxStyles.container,
        ...checkboxContainerStyles,
      }}
      activeOpacity={1}
    >
      <ExpoCheckbox
        value={value}
        style={checkboxStyles.checkbox}
        onValueChange={onValueChange}
        {...props}
        color={value ? "#333" : undefined}
      />
      {label && (
        <Text style={checkboxStyles.label} onPress={onLabelPress}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Checkbox;
