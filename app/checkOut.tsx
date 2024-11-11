import CheckoutOrderDetails from "@/components/CheckOut/CheckoutOrderDetails";
import CheckoutPaymentDetails from "@/components/CheckOut/CheckoutPaymentDetails";
import CheckoutScreenHeader from "@/components/CheckOut/CheckoutScreenHeader";
import CheckoutShippingDetails from "@/components/CheckOut/CheckoutShippingDetails";
import Button from "@/components/ui/Button";
import { checkoutStyles } from "@/styles/checkout.styles";
import React from "react";
import { View } from "react-native";

const checkOut = () => {
  return (
    <View style={checkoutStyles.container}>
      <View>
        <CheckoutScreenHeader />
        <CheckoutShippingDetails />
        <CheckoutPaymentDetails />
      </View>
      <View>
        <CheckoutOrderDetails />
      </View>
    </View>
  );
};

export default checkOut;
