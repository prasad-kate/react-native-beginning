import PaymentDetailsHeaader from "@/components/DetailsScreens/PaymentDetails/PaymentDetailsHeader";
import PaymentMethods from "@/components/DetailsScreens/PaymentDetails/PaymentMethods";
import { detailsScreenStyles } from "@/styles/detailsScreen.styles";
import React from "react";
import { View } from "react-native";

const PaymentDetails = () => {
  return (
    <View style={detailsScreenStyles.container}>
      <PaymentDetailsHeaader />
      <PaymentMethods />
    </View>
  );
};

export default PaymentDetails;
