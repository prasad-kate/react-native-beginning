import Checkbox from "@/components/ui/Checkbox";
import { ShippingAddressCheckboxProps } from "@/types";

const ShippingAddressCheckbox = ({
  addressId,
  selectedAddress,
  setSelectedAddress,
}: ShippingAddressCheckboxProps) => {
  const handleSelection = () => {
    setSelectedAddress(addressId);
  };
  return (
    <Checkbox
      label="Use as shipping address"
      value={selectedAddress === addressId}
      onValueChange={handleSelection}
      onLabelPress={handleSelection}
      checkboxContainerStyles={{
        marginHorizontal: 20,
        marginTop: 0,
        marginBottom: 35,
      }}
    />
  );
};

export default ShippingAddressCheckbox;
