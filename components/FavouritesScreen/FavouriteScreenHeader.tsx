import { favouriteScreenStyles } from "@/styles/favouriteScreen.styles";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

const FavouriteScreenHeader = () => {
  return (
    <View style={favouriteScreenStyles.headerContainer}>
      <Ionicons name="search" size={26} color="gray" />
      <Text style={favouriteScreenStyles.favouriteText}>Favourites</Text>
      <Ionicons name="cart" size={26} color="gray" />
    </View>
  );
};

export default FavouriteScreenHeader;
