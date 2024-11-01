import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { ShippingAddressCheckboxProps } from "@/types";
import Checkbox from "expo-checkbox";
import { Text, TouchableOpacity } from "react-native";

const ShippingAddressCheckbox = ({
  addressId,
  selectedAddress,
  setSelectedAddress,
}: ShippingAddressCheckboxProps) => {
  const handleSelection = () => {
    setSelectedAddress(addressId);
  };
  return (
    <TouchableOpacity
      style={{
        ...detailsScreenStyles.paymentCardSelectionCheckboxContainer,
        marginHorizontal: 20,
        marginTop: 0,
        marginBottom: 35,
      }}
      activeOpacity={1}
    >
      <Checkbox
        value={selectedAddress === addressId}
        onValueChange={() => setSelectedAddress(addressId)}
        color={selectedAddress === addressId ? "#333" : undefined}
        style={detailsScreenStyles.paymentCardSelectionCheckbox}
        onChange={handleSelection}
      />
      <Text
        style={detailsScreenStyles.paymentCardSelectionCheckboxText}
        onPress={handleSelection}
      >
        Use as shipping address
      </Text>
    </TouchableOpacity>
  );
};

export default ShippingAddressCheckbox;
