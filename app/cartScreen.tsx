import CartItemCard from "@/components/CartScreen/CartItemCard";
import CartItemsSection from "@/components/CartScreen/CartItemsSection";
import CartScreenHeader from "@/components/CartScreen/CartScreenHeader";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import React from "react";
import { View } from "react-native";

const cartScreen = () => {
  return (
    <View style={detailsScreenStyles.container}>
      <CartScreenHeader />
      <CartItemsSection />
    </View>
  );
};

export default cartScreen;
