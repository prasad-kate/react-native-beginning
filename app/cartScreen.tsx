import CartScreenHeader from "@/components/CartScreen/CartScreenHeader";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import React from "react";
import { View } from "react-native";

const cartScreen = () => {
  return (
    <View style={detailsScreenStyles.container}>
      <CartScreenHeader />
    </View>
  );
};

export default cartScreen;
