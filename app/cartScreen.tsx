import BackButtonHeader from "@/components/BackButtonHeader";
import CartItemsSection from "@/components/CartScreen/CartItemsSection";
import CartTotalSection from "@/components/CartScreen/CartTotalSection";
import EnterPromocodeSection from "@/components/CartScreen/EnterPromocodeSection";
import Button from "@/components/ui/Button";
import { useGetCartProductDetails } from "@/services/products.service";
import useCartStore from "@/store/cartStore";
import { cartScreenStyles } from "@/styles/cartScreen.styles";
import { useRouter } from "expo-router";
import { View } from "react-native";

const cartScreen = () => {
  const router = useRouter();

  const { cartItemProductDetails } = useGetCartProductDetails();
  const { cartItems } = useCartStore();

  const totalPrice = cartItems.reduce((accumulator, product) => {
    const priceObject = cartItemProductDetails.find(
      (p) => p?.id === product?.productId
    );

    if (priceObject) {
      return accumulator + product?.productCount * priceObject?.price;
    }

    return accumulator;
  }, 0);

  return (
    <View style={cartScreenStyles.container}>
      <View>
        <BackButtonHeader title="My Cart" />
        <CartItemsSection cartItemProductDetails={cartItemProductDetails} />
      </View>
      <View style={cartScreenStyles.promoCodeSectionContainer}>
        <CartTotalSection total={totalPrice} />
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
