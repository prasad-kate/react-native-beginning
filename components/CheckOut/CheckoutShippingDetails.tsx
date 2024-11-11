import { checkoutStyles } from "@/styles/checkout.styles";
import React from "react";
import { Text } from "react-native";
import CheckoutDetailsCard from "./CheckoutDetailsCard";

const CheckoutShippingDetails = () => {
  return (
    <CheckoutDetailsCard title="Shipping Details">
      <Text style={checkoutStyles.addressName}>Bruno Fernandes</Text>
      <Text style={checkoutStyles.address}>
        25 rue Robert Latouche, Nice, 06200, Côte D’azur, France, Nice, 06200,
        Côte D’azur, France
      </Text>
    </CheckoutDetailsCard>
  );
};

export default CheckoutShippingDetails;
