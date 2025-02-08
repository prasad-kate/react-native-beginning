import Checkbox from "@/components/ui/Checkbox";
import { useUpdateAddressStatus } from "@/services/address.service";
import useUserStore from "@/store/userStore";
import { ShippingAddressCheckboxProps } from "@/types";

const ShippingAddressCheckbox = ({
  index,
  addressId,
  selectedAddress,
  setSelectedAddress,
}: ShippingAddressCheckboxProps) => {
  const { userData } = useUserStore();
  const { updateAddressStatus } = useUpdateAddressStatus();
  const handleSelection = () => {
    setSelectedAddress(addressId);
    updateAddressStatus({
      userId: userData?.user_id as number,
      addressId: addressId,
    });
  };
  const isSelectedAddress = selectedAddress === addressId;
  return (
    <Checkbox
      label={`Address ${index + 1} ${isSelectedAddress ? "(In-Use)" : ""}`}
      value={isSelectedAddress}
      onValueChange={handleSelection}
      onLabelPress={handleSelection}
      checkboxContainerStyles={{
        marginTop: 0,
        marginBottom: 0,
      }}
    />
  );
};

export default ShippingAddressCheckbox;
