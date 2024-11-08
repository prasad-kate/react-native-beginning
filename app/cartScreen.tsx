import CartItemsSection from "@/components/CartScreen/CartItemsSection";
import CartScreenHeader from "@/components/CartScreen/CartScreenHeader";
import CartTotalSection from "@/components/CartScreen/CartTotalSection";
import EnterPromocodeSection from "@/components/CartScreen/EnterPromocodeSection";
import { cartScreenStyles } from "@/styles/cartScreen.styles";
import React from "react";
import { View } from "react-native";

const cartScreen = () => {
  return (
    <View style={cartScreenStyles.container}>
      <View>
        <CartScreenHeader />
        <CartItemsSection />
      </View>
      <View style={cartScreenStyles.promoCodeSectionContainer}>
        <EnterPromocodeSection />
        <CartTotalSection />
      </View>
    </View>
  );
};

export default cartScreen;
