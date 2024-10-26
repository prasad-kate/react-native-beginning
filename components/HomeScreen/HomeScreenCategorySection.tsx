import { homeScreenCategories } from "@/constants/homeScreenConstants";
import { homeScreenStyles } from "@/styles/homeScreen.styles";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

const HomeScreenCategorySection = () => {
  return (
    <ScrollView
      contentContainerStyle={homeScreenStyles.categoryContainer}
      showsHorizontalScrollIndicator={false}
      horizontal
    >
      {homeScreenCategories?.map(({ name, image }, index) => {
        return (
          <View key={index}>
            <Image
              source={image}
              style={{
                width: 44,
                height: 44,
              }}
            />
            <Text>{name}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default HomeScreenCategorySection;
