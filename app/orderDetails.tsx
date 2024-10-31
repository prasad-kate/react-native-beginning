import OrderDetailsTabSection from "@/components/DetailsScreens/OrderDetails/OrderDetailsTabSection";
import OrderDetailsHeader from "@/components/DetailsScreens/OrderDetails/OrderDetailsHeader";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import React from "react";
import { View } from "react-native";

const OrderDetails = () => {
  return (
    <View style={detailsScreenStyles.container}>
      <OrderDetailsHeader />
      <OrderDetailsTabSection />
    </View>
  );
};

export default OrderDetails;
