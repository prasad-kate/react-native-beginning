import { homeScreenStyles } from "@/styles/homeScreen.styles";
import React from "react";
import { View } from "react-native";
import HomeScreenHeader from "../../components/HomeScreen/HomeScreenHeader";
import HomeScreenCategorySection from "@/components/HomeScreen/HomeScreenCategorySection";

const HomeScreen = () => {
  return (
    <View style={homeScreenStyles.container}>
      <HomeScreenHeader />
      <HomeScreenCategorySection />
    </View>
  );
};

export default HomeScreen;
