import Checkbox from "@/components/ui/Checkbox";
import { PaymentCardSelectionCheckboxProps } from "@/types";
import React from "react";

const PaymentCardSelectionCheckbox = ({
  selectedCard,
  setSelectedCard,
  cardNumber,
}: PaymentCardSelectionCheckboxProps) => {
  const handleSelection = () => {
    setSelectedCard(cardNumber);
  };
  return (
    <Checkbox
      label="Use as default payment"
      value={selectedCard === cardNumber}
      onValueChange={() => setSelectedCard(cardNumber)}
      onChange={handleSelection}
      onLabelPress={handleSelection}
    />
  );
};

export default PaymentCardSelectionCheckbox;
