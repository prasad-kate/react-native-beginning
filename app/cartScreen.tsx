import BackButtonHeader from "@/components/BackButtonHeader";
import CartItemsSection from "@/components/CartScreen/CartItemsSection";
import CartTotalSection from "@/components/CartScreen/CartTotalSection";
import EmptyCartScreen from "@/components/CartScreen/EmptyCartScreen";
import Button from "@/components/ui/Button";
import { useGetCartProductDetails } from "@/services/products.service";
import useCartStore from "@/store/cartStore";
import useUserStore from "@/store/userStore";
import { cartScreenStyles } from "@/styles/cartScreen.styles";
import { useRouter } from "expo-router";
import { ActivityIndicator, View } from "react-native";
import Toast from "react-native-toast-message";

const cartScreen = () => {
  const { userData } = useUserStore();
  const { cartItems, setOrder } = useCartStore();
  const { cartItemProductDetails, isAnyPending } = useGetCartProductDetails();

  const router = useRouter();

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
      (product) => product?.id === cartItem?.productId
    );

    return {
      product_id: cartItem?.productId,
      quantity: cartItem?.productCount,
      price: productDetail?.price,
    };
  });

  const orderItemsAvailable = !!orderItems?.length;

  return (
    <View style={cartScreenStyles.container}>
      <BackButtonHeader title="My Cart" />
      {isAnyPending ? (
        <ActivityIndicator size={"large"} />
      ) : cartItemProductDetails?.length ? (
        <View
          style={{
            paddingHorizontal: 20,
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          {<CartItemsSection cartItemProductDetails={cartItemProductDetails} />}
          {orderItemsAvailable && (
            <CartTotalSection total={totalPrice} isAnyPending={isAnyPending} />
          )}
          <Button
            text="Checkout"
            style={[
              cartScreenStyles.cartCheckoutButton,
              {
                opacity: orderItemsAvailable ? 1 : 0.5,
              },
            ]}
            disabled={isAnyPending || !orderItemsAvailable}
            onPress={() => {
              if (orderItemsAvailable) {
                setOrder({
                  user_id: userData?.user_id!,
                  total: totalPrice,
                  items: orderItems,
                });
                router.push("/checkOut");
              } else {
                Toast.show({
                  type: "info",
                  text1: "Invalid order details. Please try again",
                });
              }
            }}
          />
        </View>
      ) : (
        <EmptyCartScreen />
      )}
    </View>
  );
};

export default cartScreen;
