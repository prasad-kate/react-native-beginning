import { CartItemsSectionProps } from "@/types";
import { FlatList } from "react-native";
import CartItemCard from "./CartItemCard";

const CartItemsSection = ({
  cartItemProductDetails,
}: CartItemsSectionProps) => {
  return (
    <FlatList
      data={cartItemProductDetails}
      keyExtractor={(_, index) => `${index}`}
      renderItem={({ item }) => {
        return (
          <CartItemCard
            productId={item?.id}
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
