import { useGetProductsCategories } from "@/services/products.service";
import useProductStore from "@/store/productStore";
import { homeScreenStyles } from "@/styles/homeScreen.styles";
import { FlatList, Image, Text, TouchableOpacity } from "react-native";

const HomeScreenCategorySection = () => {
  const { setCategory } = useProductStore();
  const { productCategories } = useGetProductsCategories();

  return (
    <FlatList
      data={productCategories}
      keyExtractor={(item) => `${item.category_id}`}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            activeOpacity={0.9}
            style={homeScreenStyles.singleCategoryContainer}
            onPress={() => {
              setCategory(item.category_id);
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
