import OrderDetailsHeader from "@/components/DetailsScreens/OrderDetailsHeader";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import React from "react";
import { View } from "react-native";

const OrderDetails = () => {
  return (
    <View style={detailsScreenStyles.container}>
      <OrderDetailsHeader />
    </View>
  );
};

export default OrderDetails;
