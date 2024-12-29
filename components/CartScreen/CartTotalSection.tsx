import { cartScreenStyles } from "@/styles/cartScreen.styles";
import { CartTotalSectionProps } from "@/types";
import { formatPrice } from "@/utils";
import { Text, View } from "react-native";

const CartTotalSection = ({ total, isAnyPending }: CartTotalSectionProps) => {
  return (
    <View style={cartScreenStyles.cartTotalContainer}>
      <Text style={cartScreenStyles.cartTotalText}>Total:</Text>
      <Text style={cartScreenStyles.cartTotal}>
        {formatPrice(isAnyPending ? 0 : total)}
      </Text>
    </View>
  );
};

export default CartTotalSection;
