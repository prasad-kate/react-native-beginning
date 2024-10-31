import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { PaymentCardSelectionCheckboxProps } from "@/types";
import Checkbox from "expo-checkbox";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

const PaymentCardSelectionCheckbox = ({
  selectedCard,
  setSelectedCard,
  cardNumber,
}: PaymentCardSelectionCheckboxProps) => {
  const handleSelection = () => {
    setSelectedCard(cardNumber);
  };
  return (
    <TouchableOpacity
      style={detailsScreenStyles.paymentCardSelectionCheckboxContainer}
      activeOpacity={1}
    >
      <Checkbox
        value={selectedCard === cardNumber}
        onValueChange={() => setSelectedCard(cardNumber)}
        color={selectedCard === cardNumber ? "#333" : undefined}
        style={detailsScreenStyles.paymentCardSelectionCheckbox}
        onChange={handleSelection}
      />
      <Text
        style={detailsScreenStyles.paymentCardSelectionCheckboxText}
        onPress={handleSelection}
      >
        Use as default payment method
      </Text>
    </TouchableOpacity>
  );
};

export default PaymentCardSelectionCheckbox;
