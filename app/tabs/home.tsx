import HomeScreenCategorySection from "@/components/HomeScreen/HomeScreenCategorySection";
import HomeScreenProductSection from "@/components/HomeScreen/HomeScreenProductSection";
import {
  useGetProducts,
  useGetProductsCategories,
} from "@/services/products.service";
import useProductStore from "@/store/productStore";
import { homeScreenStyles } from "@/styles/homeScreen.styles";
import { ActivityIndicator, View } from "react-native";
import HomeScreenHeader from "../../components/HomeScreen/HomeScreenHeader";

const HomeScreen = () => {
  const { category: selectedCategory } = useProductStore();

  const { productCategories, isGettingCategories } = useGetProductsCategories();
  const { productsList, isGettingProducts } = useGetProducts();

  const filteredProducts = productsList?.filter(
    ({ category_id }: { category_id: number; name: string }) => {
      if (selectedCategory && selectedCategory !== 1) {
        return category_id === selectedCategory;
      }
      return true; // TODO: shows all products, Later will show popular
    }
  );

  return (
    <View style={homeScreenStyles.container}>
      <HomeScreenHeader />
      {isGettingProducts ? (
        <ActivityIndicator size={"large"} style={{ marginTop: 20 }} />
      ) : (
        <>
          <HomeScreenCategorySection
            productCategories={productCategories}
            isGettingCategories={isGettingCategories}
          />
          <HomeScreenProductSection filteredProducts={filteredProducts} />
        </>
      )}
    </View>
  );
};

export default HomeScreen;
