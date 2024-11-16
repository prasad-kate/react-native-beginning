import { dropdownStyles } from "@/styles/global.styles";
import { GlobalDropdownProps } from "@/types";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Text, View } from "react-native";

const Dropdown = ({
  label,
  options,
  variant = "standard",
}: GlobalDropdownProps) => {
  const [selectedValue, setSelectedValue] = useState("");

  const containerStyles =
    variant === "standard"
      ? dropdownStyles.standardContainer
      : dropdownStyles.outlinedContainer;

  const pickerStyles =
    variant === "standard"
      ? dropdownStyles.standardPicker
      : dropdownStyles.outlinedPicker;

  return (
    <View style={containerStyles}>
      {label && <Text style={dropdownStyles.label}>{label}</Text>}
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
        style={pickerStyles}
      >
        {options.map((option, index) => (
          <Picker.Item key={index} label={option.label} value={option.value} />
        ))}
      </Picker>
    </View>
  );
};

export default Dropdown;
