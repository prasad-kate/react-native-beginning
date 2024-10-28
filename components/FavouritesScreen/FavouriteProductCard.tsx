import { favouriteScreenStyles } from "@/styles/favouriteScreen.styles";
import { FavouriteScreenProductCardProps } from "@/types";
import { formatPrice } from "@/utils";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const FavouriteProductCard = ({
  name,
  image,
  price,
}: FavouriteScreenProductCardProps) => {
  return (
    <View style={favouriteScreenStyles.cardContainer}>
      {/* product details */}
      <View style={favouriteScreenStyles.productDetailsContainer}>
        <Image source={image} style={favouriteScreenStyles.productImage} />
        <View>
          <Text style={favouriteScreenStyles.productName}>{name}</Text>
          <Text style={favouriteScreenStyles.productPrice}>
            {formatPrice(+price)}
          </Text>
        </View>
      </View>

      {/* prduct actions */}
      <TouchableOpacity
        activeOpacity={0.6}
        style={favouriteScreenStyles.cancelButtonContainer}
      >
        <Ionicons name="close" size={20} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        style={favouriteScreenStyles.shoppingBagIconContainer}
      >
        <Image
          source={require("@/assets/images/shopping-bag-icon-black.png")}
          style={favouriteScreenStyles.shoppingBagIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default FavouriteProductCard;
