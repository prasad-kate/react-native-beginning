import { textInputStyles } from "@/styles/global.styles";
import { GlobalTextInputProps } from "@/types";
import { FC } from "react";
import { TextInput as NativeTextInput, Text, View } from "react-native";

const TextInput: FC<GlobalTextInputProps> = ({
  label,
  variant = "standard",
  customInputStyles,
  customInputContainerStyles,
  ...props
}) => {
  const inputStyles =
    variant === "standard"
      ? textInputStyles.input
      : textInputStyles.outlinedInput;

  return (
    <View style={[textInputStyles.container, customInputContainerStyles]}>
      <Text style={textInputStyles.label}>{label}</Text>
      <NativeTextInput
        style={[inputStyles, customInputStyles]}
        placeholder={props.placeholder || ""}
        {...props}
      />
    </View>
  );
};

export default TextInput;
