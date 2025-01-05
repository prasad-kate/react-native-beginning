import useCartStore from "@/store/cartStore";
import { checkoutStyles } from "@/styles/checkout.styles";
import { formatPrice } from "@/utils";
import { Text, View } from "react-native";
import CheckoutDetailsCard from "./CheckoutDetailsCard";

const CheckoutOrderDetails = () => {
  const { order } = useCartStore();

  const deliverCharges = 5;
  const cartOrderTotal = order?.total || 0;

  const total = cartOrderTotal + deliverCharges;

  return (
    <CheckoutDetailsCard hideEditButton>
      <View style={checkoutStyles.orderDetailsContainer}>
        <View style={checkoutStyles.orderDetailsTextContainer}>
          <Text style={checkoutStyles.orderDetailTitle}>Order:</Text>
          <Text style={checkoutStyles.orderDetailValue}>
            {formatPrice(cartOrderTotal)}
          </Text>
        </View>
        <View style={checkoutStyles.orderDetailsTextContainer}>
          <Text style={checkoutStyles.orderDetailTitle}>Delivery:</Text>
          <Text style={checkoutStyles.orderDetailValue}>
            {formatPrice(deliverCharges)}
          </Text>
        </View>
        <View style={checkoutStyles.orderDetailsTextContainer}>
          <Text style={checkoutStyles.orderDetailTitle}>Total:</Text>
          <Text
            style={{
              ...checkoutStyles.orderDetailValue,
              fontWeight: "bold",
            }}
          >
            {formatPrice(total)}
          </Text>
        </View>
      </View>
    </CheckoutDetailsCard>
  );
};

export default CheckoutOrderDetails;
