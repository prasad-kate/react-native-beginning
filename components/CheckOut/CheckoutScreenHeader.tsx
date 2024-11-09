import { checkoutStyles } from "@/styles/checkout.styles";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const CheckoutScreenHeader = () => {
  const router = useRouter();

  return (
    <View style={checkoutStyles.headerContainer}>
      <Text style={detailsScreenStyles.headerText}>Checkout</Text>
      <Ionicons
        name="chevron-back"
        size={24}
        color="gray"
        style={detailsScreenStyles.backIcon}
        onPress={() => {
          router.back();
        }}
      />
    </View>
  );
};

export default CheckoutScreenHeader;
