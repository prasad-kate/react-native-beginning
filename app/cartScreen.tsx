import CartItemsSection from "@/components/CartScreen/CartItemsSection";
import CartScreenHeader from "@/components/CartScreen/CartScreenHeader";
import CartTotalSection from "@/components/CartScreen/CartTotalSection";
import EnterPromocodeSection from "@/components/CartScreen/EnterPromocodeSection";
import Button from "@/components/ui/Button";
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
        <CartTotalSection />
        <EnterPromocodeSection />
        <Button text="Checkout" style={cartScreenStyles.cartCheckoutButton} />
      </View>
    </View>
  );
};

export default cartScreen;
