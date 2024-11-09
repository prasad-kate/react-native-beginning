import CheckoutScreenHeader from "@/components/CheckOut/CheckoutScreenHeader";
import { checkoutStyles } from "@/styles/checkout.styles";
import React from "react";
import { View } from "react-native";

const checkOut = () => {
  return (
    <View style={checkoutStyles.container}>
      <CheckoutScreenHeader />
    </View>
  );
};

export default checkOut;
