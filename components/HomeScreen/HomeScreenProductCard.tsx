import { homeScreenStyles } from "@/styles/homeScreen.styles";
import { HomeScreenProductCardProps } from "@/types";
import { formatPrice } from "@/utils";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

const HomeScreenProductCard = ({
  name,
  image,
  price,
}: HomeScreenProductCardProps) => {
  return (
    <View style={homeScreenStyles.productCardContainer}>
      <ImageBackground
        source={image}
        style={homeScreenStyles.productCardImage}
        resizeMode="cover"
      >
        <Image
          source={require("@/assets/images/shopping-bag-icon.png")}
          style={homeScreenStyles.shoppingCartIcon}
        />
      </ImageBackground>
      <Text style={homeScreenStyles.productName}>{name}</Text>
      <Text style={homeScreenStyles.productPrice}>{formatPrice(+price)}</Text>
    </View>
  );
};

export default HomeScreenProductCard;
