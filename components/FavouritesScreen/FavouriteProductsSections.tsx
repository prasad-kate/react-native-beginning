import { favouriteScreenProducts } from "@/constants/favouriteScreenConstants";
import { favouriteScreenStyles } from "@/styles/favouriteScreen.styles";
import React from "react";
import { FlatList, View } from "react-native";
import Button from "../ui/Button";
import FavouriteProductCard from "./FavouriteProductCard";

const FavouriteProductsSections = () => {
  return (
    <View style={favouriteScreenStyles.sectionContainer}>
      <FlatList
        data={favouriteScreenProducts}
        keyExtractor={(_, index) => `${index}`}
        renderItem={({ item }) => {
          return (
            <FavouriteProductCard
              name={item.name}
              image={item.image}
              price={item.price}
            />
          );
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={favouriteScreenStyles.productsContainer}
      />
      <Button
        text="Add all to cart"
        activeOpacity={0.9}
        style={favouriteScreenStyles.addAllToCartButton}
      />
    </View>
  );
};

export default FavouriteProductsSections;
