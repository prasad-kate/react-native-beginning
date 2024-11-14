import { dropdownStyles } from "@/styles/global.styles";
import { DropdownOptions } from "@/types";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Text, View } from "react-native";

const SelectComponent = ({
  label,
  options,
}: {
  label: string;
  options: DropdownOptions[];
}) => {
  const [selectedValue, setSelectedValue] = useState(options?.[0]);

  return (
    <View style={dropdownStyles.container}>
      {label && <Text style={dropdownStyles.label}>{label}</Text>}
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
        style={dropdownStyles.picker}
      >
        {options.map((option, index) => (
          <Picker.Item key={index} label={option.label} value={option.value} />
        ))}
      </Picker>
    </View>
  );
};

export default SelectComponent;
