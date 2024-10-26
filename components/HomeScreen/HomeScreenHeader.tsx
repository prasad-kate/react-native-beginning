import { homeScreenStyles } from "@/styles/homeScreen.styles";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

const HomeScreenHeader = () => {
  return (
    <View style={homeScreenStyles.headerContainer}>
      <Ionicons name="search" size={26} color="gray" />
      <View style={homeScreenStyles.headerTextContainer}>
        <Text style={homeScreenStyles.headerMakeHomeText} numberOfLines={1}>
          Make Home
        </Text>
        <Text style={homeScreenStyles.headerBeautifulText}>Beautiful</Text>
      </View>
      <Ionicons name="cart" size={26} color="gray" />
    </View>
  );
};

export default HomeScreenHeader;
