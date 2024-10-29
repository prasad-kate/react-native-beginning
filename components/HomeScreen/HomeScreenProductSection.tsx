import { homeScreenProducts } from "@/constants/homeScreenConstants";
import { homeScreenStyles } from "@/styles/homeScreen.styles";
import React from "react";
import { FlatList } from "react-native";
import HomeScreenProductCard from "./HomeScreenProductCard";

const HomeScreenProductSection = () => {
  return (
    <FlatList
      data={homeScreenProducts}
      keyExtractor={({ name, price }) => `${name}-${price}`}
      renderItem={({ item, index }) => {
        const isSingleItem =
          index % 2 === 0 && index === homeScreenProducts?.length - 1;
        return (
          <HomeScreenProductCard
            name={item.name}
            image={item.image}
            price={item.price}
            isSingleItem={isSingleItem}
          />
        );
      }}
      columnWrapperStyle={homeScreenStyles.productsContainer}
      showsVerticalScrollIndicator={false}
      numColumns={2}
    />
  );
};

export default HomeScreenProductSection;
