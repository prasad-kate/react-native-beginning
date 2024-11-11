import { cartScreenStyles } from "@/styles/cartScreen.styles";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import TextInput from "../ui/TextInput";

const EnterPromocodeSection = () => {
  return (
    <View style={cartScreenStyles.promoCodeInputAndButtonContainer}>
      <View style={cartScreenStyles.promoCodeInputContainer}>
        <TextInput
          placeholder="Enter your promo code"
          style={cartScreenStyles.promoCodeInputStyles}
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.6}
        style={cartScreenStyles.promoCodeSubmitButton}
      >
        <Ionicons name="chevron-forward" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default EnterPromocodeSection;
