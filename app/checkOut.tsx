import BackButtonHeader from "@/components/BackButtonHeader";
import CheckoutOrderDetails from "@/components/CheckOut/CheckoutOrderDetails";
import CheckoutPaymentDetails from "@/components/CheckOut/CheckoutPaymentDetails";
import CheckoutShippingDetails from "@/components/CheckOut/CheckoutShippingDetails";
import Button from "@/components/ui/Button";
import { useSendOrder } from "@/services/orders.service";
import useCartStore from "@/store/cartStore";
import { checkoutStyles } from "@/styles/checkout.styles";
import { View } from "react-native";

const checkOut = () => {
  const { order } = useCartStore();
  const { sendOrder, isSendingOrder } = useSendOrder();

  return (
    <View style={checkoutStyles.container}>
      <View>
        <BackButtonHeader title="Checkout" />
        <View style={checkoutStyles.checkoutDetailsContainer}>
          <CheckoutShippingDetails />
          <CheckoutPaymentDetails />
          <CheckoutOrderDetails />
        </View>
      </View>
      <View style={checkoutStyles.checkoutDetailsContainer}>
        <Button
          text="Submit Order"
          style={[
            checkoutStyles.submitOrderButton,
            {
              opacity: isSendingOrder ? 0.5 : 1,
            },
          ]}
          disabled={isSendingOrder}
          onPress={() => {
            if (order) {
              sendOrder(order);
            }
          }}
        />
      </View>
    </View>
  );
};

export default checkOut;
