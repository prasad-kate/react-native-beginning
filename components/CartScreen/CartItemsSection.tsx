import { cartItems } from "@/constants/cartScreenConstants";
import React from "react";
import { FlatList } from "react-native";
import CartItemCard from "./CartItemCard";

const CartItemsSection = () => {
  return (
    <FlatList
      data={cartItems}
      keyExtractor={(_, index) => `${index}`}
      renderItem={({ item }) => {
        const { name, image, price } = item;
        return <CartItemCard name={name} image={image} price={price} />;
      }}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CartItemsSection;
