import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { ShippingAddressCardProps } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import ShippingAddressCheckbox from "./ShippingDetailsCheckbox";

const ShippingDetailsCard = ({
  name,
  address,
  addressId,
  selectedAddress,
  setSelectedAddress,
}: ShippingAddressCardProps) => {
  return (
    <View style={detailsScreenStyles.shippingDetailsCardContainer}>
      <View style={detailsScreenStyles.shippindDetailsCardHeader}>
        <ShippingAddressCheckbox
          addressId={addressId}
          selectedAddress={selectedAddress}
          setSelectedAddress={setSelectedAddress}
        />
        <TouchableOpacity activeOpacity={0.5}>
          <Ionicons name="create" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={detailsScreenStyles.shippindAddress}>{address}</Text>
    </View>
  );
};

export default ShippingDetailsCard;
