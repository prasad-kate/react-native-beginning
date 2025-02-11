import Checkbox from "@/components/ui/Checkbox";
import { PaymentCardSelectionCheckboxProps } from "@/types";

const PaymentCardSelectionCheckbox = ({
  selectedCard,
  setSelectedCard,
  cardNumber,
  index,
}: PaymentCardSelectionCheckboxProps) => {
  const handleSelection = () => {
    setSelectedCard(index);
  };
  return (
    <Checkbox
      label="Use as default payment"
      value={selectedCard === index}
      onValueChange={() => setSelectedCard(index)}
      onChange={handleSelection}
      onLabelPress={handleSelection}
    />
  );
};

export default PaymentCardSelectionCheckbox;
