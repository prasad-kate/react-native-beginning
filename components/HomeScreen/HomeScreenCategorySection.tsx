import { homeScreenCategories } from "@/constants/homeScreenConstants";
import { homeScreenStyles } from "@/styles/homeScreen.styles";
import { FlatList, Image, Text, View } from "react-native";

const HomeScreenCategorySection = () => {
  return (
    <FlatList
      data={homeScreenCategories}
      keyExtractor={(_, index) => `${index}`}
      renderItem={({ item }) => {
        return (
          <View style={homeScreenStyles.singleCategoryContainer}>
            <Image
              source={item.image}
              style={homeScreenStyles.singleCategoryImage}
            />
            <Text style={homeScreenStyles.categoryName}>{item.name}</Text>
          </View>
        );
      }}
      contentContainerStyle={homeScreenStyles.categoryContainerContentStyles}
      style={homeScreenStyles.categoryContainerStyles}
      showsHorizontalScrollIndicator={false}
      horizontal
    />
  );
};

export default HomeScreenCategorySection;
