import BackButtonHeader from "@/components/BackButtonHeader";
import CartItemsSection from "@/components/CartScreen/CartItemsSection";
import CartTotalSection from "@/components/CartScreen/CartTotalSection";
import Button from "@/components/ui/Button";
import { useSendOrder } from "@/services/orders.service";
import { useGetCartProductDetails } from "@/services/products.service";
import useCartStore from "@/store/cartStore";
import useUserStore from "@/store/userStore";
import { cartScreenStyles } from "@/styles/cartScreen.styles";
import { ActivityIndicator, View } from "react-native";

const cartScreen = () => {
  const { cartItemProductDetails, isAnyPending } = useGetCartProductDetails();
  const { cartItems } = useCartStore();
  const { sendOrder } = useSendOrder();
  const { userData } = useUserStore();

  const totalPrice = cartItems.reduce((accumulator, product) => {
    const priceObject = cartItemProductDetails.find(
      (p) => p?.id === product?.productId
    );

    if (priceObject) {
      return accumulator + product?.productCount * priceObject?.price;
    }

    return accumulator;
  }, 0);

  const orderItems = cartItems.map((cartItem) => {
    const productDetail = cartItemProductDetails.find(
      (product) => product?.product_id === cartItem?.productId
    );
    return {
      product_id: cartItem?.productId,
      quantity: cartItem?.productCount,
      price: productDetail?.price,
    };
  });

  return (
    <View style={cartScreenStyles.container}>
      <View>
        <BackButtonHeader title="My Cart" />
        {isAnyPending ? (
          <ActivityIndicator size={"large"} />
        ) : (
          <CartItemsSection cartItemProductDetails={cartItemProductDetails} />
        )}
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <CartTotalSection total={totalPrice} isAnyPending={isAnyPending} />
        <Button
          text="Checkout"
          style={cartScreenStyles.cartCheckoutButton}
          disabled={isAnyPending}
          onPress={() => {
            sendOrder({
              user_id: userData?.user_id!,
              total: totalPrice,
              items: orderItems,
            });
          }}
        />
      </View>
    </View>
  );
};

export default cartScreen;
