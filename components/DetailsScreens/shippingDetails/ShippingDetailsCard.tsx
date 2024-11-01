import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { ShippingAddressCardProps } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const ShippingDetailsCard = ({ name, address }: ShippingAddressCardProps) => {
  return (
    <View style={detailsScreenStyles.shippingDetailsCardContainer}>
      <View style={detailsScreenStyles.shippindDetailsCardHeader}>
        <Text style={detailsScreenStyles.shippindAddressName}>{name}</Text>
        <TouchableOpacity activeOpacity={0.5}>
          <Ionicons name="create" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={detailsScreenStyles.shippindAddress}>{address}</Text>
    </View>
  );
};

export default ShippingDetailsCard;
