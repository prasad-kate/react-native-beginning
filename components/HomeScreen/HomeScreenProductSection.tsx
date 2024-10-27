import { homeScreenProducts } from "@/constants/homeScreenConstants";
import { homeScreenStyles } from "@/styles/homeScreen.styles";
import React from "react";
import { ScrollView } from "react-native";
import HomeScreenProductCard from "./HomeScreenProductCard";

const HomeScreenProductSection = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={homeScreenStyles.productsContainer}
    >
      {homeScreenProducts?.map(({ name, image, price }, index) => {
        return (
          <HomeScreenProductCard
            key={index}
            name={name}
            image={image}
            price={price}
          />
        );
      })}
    </ScrollView>
  );
};

export default HomeScreenProductSection;
