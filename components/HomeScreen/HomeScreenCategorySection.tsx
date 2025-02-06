import useProductStore from "@/store/productStore";
import { homeScreenStyles } from "@/styles/homeScreen.styles";
import { HomeScreenCategorySectionProps } from "@/types";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import SkeletonLoader from "../Skeleton";

const HomeScreenCategorySection = ({
  productCategories,
  isGettingCategories,
}: HomeScreenCategorySectionProps) => {
  const { setCategory, category: selectedCategory } = useProductStore();

  return isGettingCategories ? (
    <SkeletonLoader style={{ height: 60, marginBottom: 20 }} />
  ) : (
    <FlatList
      data={productCategories}
      keyExtractor={(item) => `${item.category_id}`}
      renderItem={({ item }) => {
        const isSelectedCategory = selectedCategory === item.category_id;
        return (
          <TouchableOpacity
            activeOpacity={0.9}
            style={homeScreenStyles.singleCategoryContainer}
            onPress={() => {
              setCategory(item.category_id);
            }}
          >
            <View
              style={[
                homeScreenStyles.singleCategoryImageContainer,
                {
                  borderColor: isSelectedCategory ? "lightgrey" : "transparent",
                },
              ]}
            >
              <Image
                source={item.image}
                style={homeScreenStyles.singleCategoryImage}
              />
            </View>
            <Text
              style={[
                homeScreenStyles.categoryName,
                { color: isSelectedCategory ? "black" : "gray" },
              ]}
            >
              {item.name}
            </Text>
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
