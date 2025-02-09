import { dropdownStyles } from "@/styles/global.styles";
import { GlobalDropdownProps } from "@/types";
import { Picker } from "@react-native-picker/picker";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Text, View } from "react-native";

const Dropdown: FC<GlobalDropdownProps> = ({
  name,
  label,
  options,
  variant = "standard",
  ...props
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const containerStyles =
    variant === "standard"
      ? dropdownStyles.standardContainer
      : dropdownStyles.outlinedContainer;

  const pickerStyles =
    variant === "standard"
      ? dropdownStyles.standardPicker
      : dropdownStyles.outlinedPicker;

  return (
    <View style={[containerStyles]}>
      {label && <Text style={dropdownStyles.label}>{label}</Text>}

      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Picker
            selectedValue={value || ""}
            onValueChange={onChange}
            style={[pickerStyles]}
            {...props}
          >
            <Picker.Item label="Select" value="" enabled={false} />
            {options.map((option, index) => (
              <Picker.Item
                key={index}
                label={option.label}
                value={option.value}
              />
            ))}
          </Picker>
        )}
      />

      {errors[name] && (
        <Text style={dropdownStyles.error}>
          {errors[name]?.message as string}
        </Text>
      )}
    </View>
  );
};

export default Dropdown;
