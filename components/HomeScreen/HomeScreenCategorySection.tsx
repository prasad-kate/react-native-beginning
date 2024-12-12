import { homeScreenCategories } from "@/constants/homeScreenConstants";
import useProductStore from "@/store/productStore";
import { homeScreenStyles } from "@/styles/homeScreen.styles";
import { FlatList, Image, Text, TouchableOpacity } from "react-native";

const HomeScreenCategorySection = () => {
  const { setCategory } = useProductStore();
  return (
    <FlatList
      data={homeScreenCategories}
      keyExtractor={(_, index) => `${index}`}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            activeOpacity={0.9}
            style={homeScreenStyles.singleCategoryContainer}
            onPress={() => {
              setCategory(item.name);
            }}
          >
            <Image
              source={item.image}
              style={homeScreenStyles.singleCategoryImage}
            />
            <Text style={homeScreenStyles.categoryName}>{item.name}</Text>
          </TouchableOpacity>
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
