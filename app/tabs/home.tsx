import HomeScreenCategorySection from "@/components/HomeScreen/HomeScreenCategorySection";
import HomeScreenProductSection from "@/components/HomeScreen/HomeScreenProductSection";
import { homeScreenStyles } from "@/styles/homeScreen.styles";
import React from "react";
import { View } from "react-native";
import HomeScreenHeader from "../../components/HomeScreen/HomeScreenHeader";

const HomeScreen = () => {
  return (
    <View style={homeScreenStyles.container}>
      <HomeScreenHeader />
      <HomeScreenCategorySection />
      <HomeScreenProductSection />
    </View>
  );
};

export default HomeScreen;
