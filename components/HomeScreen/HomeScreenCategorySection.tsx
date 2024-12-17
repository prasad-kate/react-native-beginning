import { useGetProductsCategories } from "@/services/products.service";
import useProductStore from "@/store/productStore";
import { homeScreenStyles } from "@/styles/homeScreen.styles";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

const HomeScreenCategorySection = () => {
  const { setCategory, category: selectedCategory } = useProductStore();
  const { productCategories } = useGetProductsCategories();

  return (
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
                source={{ uri: item.image }}
                style={homeScreenStyles.singleCategoryImage}
              />
            </View>
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
