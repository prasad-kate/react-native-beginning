import { passwordInputStyles } from "@/styles/global.styles";
import { PasswordInputProps } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import React, { FC, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const PasswordInput: FC<PasswordInputProps> = ({ label, ...props }) => {
  const [password, setPassword] = useState<string>("");
  const [secureText, setSecureText] = useState<boolean>(true);

  const togglePasswordVisibility = () => {
    setSecureText(!secureText);
  };

  return (
    <View style={passwordInputStyles.container}>
      <Text style={passwordInputStyles.label}>{label}</Text>
      <View style={passwordInputStyles.inputContainer}>
        <TextInput
          style={passwordInputStyles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={secureText}
          placeholder="Enter your password"
          {...props}
        />
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={passwordInputStyles.icon}
        >
          <Ionicons
            name={secureText ? "eye-off" : "eye"}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordInput;
