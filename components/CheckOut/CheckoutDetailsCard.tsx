import { checkoutStyles } from "@/styles/checkout.styles";
import { CheckoutDetailsCardProp } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const CheckoutDetailsCard = ({
  children,
  containerStyles,
  title,
  onEdit,
  ...props
}: CheckoutDetailsCardProp) => {
  return (
    <>
      <View style={checkoutStyles.checkoutDetailsHeaderContainer}>
        <Text style={checkoutStyles.checkoutDetailsTitle}>{title}</Text>
        <TouchableOpacity activeOpacity={0.5} onPress={onEdit}>
          <Ionicons name="create" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          ...checkoutStyles.checkoutDetailsCardContainer,
          ...containerStyles,
        }}
        {...props}
      >
        {children}
      </View>
    </>
  );
};

export default CheckoutDetailsCard;
