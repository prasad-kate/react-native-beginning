import { cartScreenStyles } from "@/styles/cartScreen.styles";
import { formatPrice } from "@/utils";
import React from "react";
import { Text, View } from "react-native";

const CartTotalSection = () => {
  return (
    <View style={cartScreenStyles.cartTotalContainer}>
      <Text style={cartScreenStyles.cartTotalText}>Total:</Text>
      <Text style={cartScreenStyles.cartTotal}>{formatPrice(95)}</Text>
    </View>
  );
};

export default CartTotalSection;
