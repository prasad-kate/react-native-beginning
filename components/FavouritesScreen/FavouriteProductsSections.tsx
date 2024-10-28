import { favouriteScreenProducts } from "@/constants/favouriteScreenConstants";
import { favouriteScreenStyles } from "@/styles/favouriteScreen.styles";
import React from "react";
import { ScrollView, View } from "react-native";
import Button from "../ui/Button";
import FavouriteProductCard from "./FavouriteProductCard";

const FavouriteProductsSections = () => {
  return (
    <View style={favouriteScreenStyles.sectionContainer}>
      <ScrollView
        contentContainerStyle={favouriteScreenStyles.productsContainer}
        showsVerticalScrollIndicator={false}
      >
        {favouriteScreenProducts?.map(({ name, image, price }, index) => {
          return (
            <FavouriteProductCard
              key={index}
              name={name}
              image={image}
              price={price}
            />
          );
        })}
      </ScrollView>
      <Button
        text="Add all to cart"
        activeOpacity={0.9}
        style={favouriteScreenStyles.addAllToCartButton}
      />
    </View>
  );
};

export default FavouriteProductsSections;
