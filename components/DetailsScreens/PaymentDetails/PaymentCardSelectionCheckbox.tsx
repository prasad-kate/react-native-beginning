import Checkbox from "@/components/ui/Checkbox";
import { useUpdateCardStatus } from "@/services/payment.service";
import useUserStore from "@/store/userStore";
import { PaymentCardSelectionCheckboxProps } from "@/types";

const PaymentCardSelectionCheckbox = ({
  selectedCard,
  setSelectedCard,
  cardId,
}: PaymentCardSelectionCheckboxProps) => {
  const { updateCardStatus } = useUpdateCardStatus();
  const { userData } = useUserStore();
  const handleSelection = () => {
    setSelectedCard(cardId);
    updateCardStatus({
      cardId,
      userId: userData?.user_id!,
    });
  };
  return (
    <Checkbox
      label="Use as default payment"
      value={selectedCard === cardId}
      onChange={handleSelection}
      onLabelPress={handleSelection}
    />
  );
};

export default PaymentCardSelectionCheckbox;
