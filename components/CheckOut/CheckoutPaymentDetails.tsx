import { checkoutStyles } from "@/styles/checkout.styles";
import React from "react";
import { Image, Text, View } from "react-native";
import CheckoutDetailsCard from "./CheckoutDetailsCard";

const CheckoutPaymentDetails = () => {
  return (
    <CheckoutDetailsCard title="Payment">
      <View style={checkoutStyles.paymentDetailsContainer}>
        <View style={checkoutStyles.paymentDetailsCardIconContainer}>
          <Image
            source={require("@/assets/images/checkout-details-card-icon.png")}
            style={checkoutStyles.paymentDetailsCardIconImage}
          />
        </View>
        <Text
          style={checkoutStyles.paymentDetailsCardNumber}
        >{`****  ****  ****  0987`}</Text>
      </View>
    </CheckoutDetailsCard>
  );
};

export default CheckoutPaymentDetails;
