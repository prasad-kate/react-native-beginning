import ShippingDetailsAddressSection from "@/components/DetailsScreens/shippingDetails/ShippingDetailsAddressSection";
import ShippingDetailsHeader from "@/components/DetailsScreens/shippingDetails/ShippingDetailsHeader";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import React from "react";
import { View } from "react-native";

const shippingDetails = () => {
  return (
    <View style={detailsScreenStyles.container}>
      <ShippingDetailsHeader />
      <ShippingDetailsAddressSection />
    </View>
  );
};

export default shippingDetails;
