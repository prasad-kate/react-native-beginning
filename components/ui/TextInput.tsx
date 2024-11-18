import { textInputStyles } from "@/styles/global.styles";
import { GlobalTextInputProps } from "@/types";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { TextInput as NativeTextInput, Text, View } from "react-native";

const TextInput: FC<GlobalTextInputProps> = ({
  name,
  label,
  variant = "standard",
  customInputStyles,
  ...props
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const inputStyles =
    variant === "standard"
      ? textInputStyles.input
      : textInputStyles.outlinedInput;

  return (
    <View style={textInputStyles.container}>
      {label && <Text style={textInputStyles.label}>{label}</Text>}

      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <NativeTextInput
            style={[inputStyles, customInputStyles]}
            placeholder={props.placeholder || ""}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            {...props}
          />
        )}
      />

      {errors[name] && (
        <Text style={textInputStyles.error}>
          {errors[name]?.message as string}
        </Text>
      )}
    </View>
  );
};

export default TextInput;
