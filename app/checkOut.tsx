import BackButtonHeader from "@/components/BackButtonHeader";
import CheckoutOrderDetails from "@/components/CheckOut/CheckoutOrderDetails";
import CheckoutPaymentDetails from "@/components/CheckOut/CheckoutPaymentDetails";
import CheckoutShippingDetails from "@/components/CheckOut/CheckoutShippingDetails";
import Button from "@/components/ui/Button";
import { checkoutStyles } from "@/styles/checkout.styles";
import { useRouter } from "expo-router";
import { View } from "react-native";

const checkOut = () => {
  const router = useRouter();
  return (
    <View style={checkoutStyles.container}>
      <View>
        <BackButtonHeader title="Checkout" />
        <CheckoutShippingDetails />
        <CheckoutPaymentDetails />
        <CheckoutOrderDetails />
      </View>
      <View>
        <Button
          text="Submit Order"
          style={checkoutStyles.submitOrderButton}
          onPress={() => {
            router.push("/success");
          }}
        />
      </View>
    </View>
  );
};

export default checkOut;
