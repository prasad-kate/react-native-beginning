import { checkoutStyles } from "@/styles/checkout.styles";
import { formatPrice } from "@/utils";
import React from "react";
import { Text, View } from "react-native";
import CheckoutDetailsCard from "./CheckoutDetailsCard";

const CheckoutOrderDetails = () => {
  return (
    <CheckoutDetailsCard hideEditButton>
      <View style={checkoutStyles.orderDetailsContainer}>
        <View style={checkoutStyles.orderDetailsTextContainer}>
          <Text style={checkoutStyles.orderDetailTitle}>Order:</Text>
          <Text style={checkoutStyles.orderDetailValue}>{formatPrice(95)}</Text>
        </View>
        <View style={checkoutStyles.orderDetailsTextContainer}>
          <Text style={checkoutStyles.orderDetailTitle}>Delivery:</Text>
          <Text style={checkoutStyles.orderDetailValue}>{formatPrice(5)}</Text>
        </View>
        <View style={checkoutStyles.orderDetailsTextContainer}>
          <Text style={checkoutStyles.orderDetailTitle}>Total:</Text>
          <Text
            style={{
              ...checkoutStyles.orderDetailValue,
              fontWeight: "bold",
            }}
          >
            {formatPrice(95)}
          </Text>
        </View>
      </View>
    </CheckoutDetailsCard>
  );
};

export default CheckoutOrderDetails;
