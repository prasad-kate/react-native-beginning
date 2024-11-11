import CheckoutOrderDetails from "@/components/CheckOut/CheckoutOrderDetails";
import CheckoutPaymentDetails from "@/components/CheckOut/CheckoutPaymentDetails";
import CheckoutScreenHeader from "@/components/CheckOut/CheckoutScreenHeader";
import CheckoutShippingDetails from "@/components/CheckOut/CheckoutShippingDetails";
import Button from "@/components/ui/Button";
import { checkoutStyles } from "@/styles/checkout.styles";
import { Href, useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";

const checkOut = () => {
  const router = useRouter();
  return (
    <View style={checkoutStyles.container}>
      <View>
        <CheckoutScreenHeader />
        <CheckoutShippingDetails />
        <CheckoutPaymentDetails />
        <CheckoutOrderDetails />
      </View>
      <View>
        <Button
          text="Submit Order"
          style={checkoutStyles.submitOrderButton}
          onPress={() => {
            router.push("/success" as Href<string>);
          }}
        />
      </View>
    </View>
  );
};

export default checkOut;
