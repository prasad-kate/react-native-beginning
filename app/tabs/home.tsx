import HomeScreenCategorySection from "@/components/HomeScreen/HomeScreenCategorySection";
import HomeScreenProductSection from "@/components/HomeScreen/HomeScreenProductSection";
import {
  useGetProducts,
  useGetProductsCategories,
} from "@/services/products.service";
import { useGlobalSearchStore } from "@/store/globalSearchStore";
import useProductStore from "@/store/productStore";
import { homeScreenStyles } from "@/styles/homeScreen.styles";
import { useMemo } from "react";
import { ActivityIndicator, View } from "react-native";
import HomeScreenHeader from "../../components/HomeScreen/HomeScreenHeader";

const HomeScreen = () => {
  const { category: selectedCategory } = useProductStore();
  const { globalSearch } = useGlobalSearchStore();
  const { productCategories, isGettingCategories } = useGetProductsCategories();
  const { productsList, isGettingProducts } = useGetProducts();

  const filteredProducts = useMemo(() => {
    return productsList?.filter(
      ({ category_id, name }: { category_id: number; name: string }) => {
        const matchesCategory =
          selectedCategory && selectedCategory !== 1
            ? category_id === selectedCategory
            : true;

        const matchesSearch = globalSearch
          ? name.toLowerCase().includes(globalSearch.toLowerCase())
          : true;

        return matchesCategory || matchesSearch;
      }
    );
  }, [productsList, selectedCategory, globalSearch]);

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
