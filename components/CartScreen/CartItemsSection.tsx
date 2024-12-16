import { useGetCartProductDetails } from "@/services/products.service";
import { FlatList } from "react-native";
import CartItemCard from "./CartItemCard";

const CartItemsSection = () => {
  const { cartItemProductDetails } = useGetCartProductDetails();

  return (
    <FlatList
      data={cartItemProductDetails}
      keyExtractor={(_, index) => `${index}`}
      renderItem={({ item }) => {
        return (
          <CartItemCard
            name={item?.name}
            image={item?.image}
            price={item?.price}
          />
        );
      }}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CartItemsSection;
