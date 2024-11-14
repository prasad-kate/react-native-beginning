import { textInputStyles } from "@/styles/global.styles";
import { GlobalTextInputProps } from "@/types";
import { FC } from "react";
import { TextInput as NativeTextInput, Text, View } from "react-native";

const TextInput: FC<GlobalTextInputProps> = ({ label, ...props }) => {
  return (
    <View style={textInputStyles.container}>
      <Text style={textInputStyles.label}>{label}</Text>
      <NativeTextInput
        style={textInputStyles.input}
        placeholder={props.placeholder || ""}
        {...props}
      />
    </View>
  );
};

export default TextInput;
