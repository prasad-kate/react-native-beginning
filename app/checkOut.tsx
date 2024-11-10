import CheckoutScreenHeader from "@/components/CheckOut/CheckoutScreenHeader";
import CheckoutShippingDetails from "@/components/CheckOut/CheckoutShippingDetails";
import { checkoutStyles } from "@/styles/checkout.styles";
import React from "react";
import { View } from "react-native";

const checkOut = () => {
  return (
    <View style={checkoutStyles.container}>
      <CheckoutScreenHeader />
      <CheckoutShippingDetails />
    </View>
  );
};

export default checkOut;
