import BackButtonHeader from "@/components/BackButtonHeader";
import CartItemsSection from "@/components/CartScreen/CartItemsSection";
import CartTotalSection from "@/components/CartScreen/CartTotalSection";
import EnterPromocodeSection from "@/components/CartScreen/EnterPromocodeSection";
import Button from "@/components/ui/Button";
import { cartScreenStyles } from "@/styles/cartScreen.styles";
import { useRouter } from "expo-router";
import { View } from "react-native";

const cartScreen = () => {
  const router = useRouter();

  return (
    <View style={cartScreenStyles.container}>
      <View>
        <BackButtonHeader title="My Cart" />
        <CartItemsSection />
      </View>
      <View style={cartScreenStyles.promoCodeSectionContainer}>
        <CartTotalSection />
        <EnterPromocodeSection />
        <Button
          text="Checkout"
          style={cartScreenStyles.cartCheckoutButton}
          onPress={() => {
            router.push("/checkOut");
          }}
        />
      </View>
    </View>
  );
};

export default cartScreen;
