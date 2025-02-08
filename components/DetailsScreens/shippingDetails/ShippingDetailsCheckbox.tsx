import Checkbox from "@/components/ui/Checkbox";
import { ShippingAddressCheckboxProps } from "@/types";

const ShippingAddressCheckbox = ({
  index,
  addressId,
  selectedAddress,
  setSelectedAddress,
}: ShippingAddressCheckboxProps) => {
  const handleSelection = () => {
    setSelectedAddress(addressId);
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
