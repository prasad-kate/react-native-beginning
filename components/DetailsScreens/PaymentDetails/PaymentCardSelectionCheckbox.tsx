import Checkbox from "@/components/ui/Checkbox";
import { PaymentCardSelectionCheckboxProps } from "@/types";

const PaymentCardSelectionCheckbox = ({
  selectedCard,
  setSelectedCard,
  cardID,
}: PaymentCardSelectionCheckboxProps) => {
  const handleSelection = () => {
    setSelectedCard(cardID);
  };
  return (
    <Checkbox
      label="Use as default payment"
      value={selectedCard === cardID}
      onChange={handleSelection}
      onLabelPress={handleSelection}
    />
  );
};

export default PaymentCardSelectionCheckbox;
