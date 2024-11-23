import { passwordInputStyles } from "@/styles/global.styles";
import { GlobalTextInputProps } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { FC, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
  TextInput as NativeTextInput,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const PasswordInput: FC<GlobalTextInputProps> = ({
  name,
  label,
  variant = "standard",
  customInputStyles,
  customInputContainerStyles,
  ...props
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const [secureText, setSecureText] = useState<boolean>(true);

  const togglePasswordVisibility = () => {
    setSecureText(!secureText);
  };

  const inputStyles =
    variant === "standard"
      ? passwordInputStyles.input
      : passwordInputStyles.outlinedInput;

  return (
    <View style={[passwordInputStyles.container, customInputContainerStyles]}>
      {label && <Text style={passwordInputStyles.label}>{label}</Text>}

      <View style={passwordInputStyles.inputContainer}>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <NativeTextInput
                style={[inputStyles, customInputStyles]}
                placeholder={props.placeholder || ""}
                secureTextEntry={secureText}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
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
            </>
          )}
        />
      </View>

      {errors[name] && (
        <Text style={passwordInputStyles.error}>
          {errors[name]?.message as string}
        </Text>
      )}
    </View>
  );
};

export default PasswordInput;
