import Checkbox from "@/components/ui/Checkbox";
import { PaymentCardSelectionCheckboxProps } from "@/types";

const PaymentCardSelectionCheckbox = ({
  selectedCard,
  cardId,
  handleSelection,
}: PaymentCardSelectionCheckboxProps) => {
  return (
    <Checkbox
      label="Use as default payment"
      value={selectedCard === cardId}
      onChange={() => {
        handleSelection(cardId);
      }}
      onLabelPress={() => {
        handleSelection(cardId);
      }}
    />
  );
};

export default PaymentCardSelectionCheckbox;
