import { useGetProducts } from "@/services/products.service";
import useProductStore from "@/store/productStore";
import { homeScreenStyles } from "@/styles/homeScreen.styles";
import { FlatList } from "react-native";
import EmptySection from "../DetailsScreens/OrderDetails/OrderDetailsEmptySection";
import HomeScreenProductCard from "./HomeScreenProductCard";

const HomeScreenProductSection = () => {
  const { category: selectedCategory } = useProductStore();
  const { productsList } = useGetProducts();

  const filteredProducts = productsList?.filter(
    ({ category_id }: { category_id: number; name: string }) => {
      if (selectedCategory && selectedCategory !== 1) {
        return category_id === selectedCategory;
      }
      return true; // TODO: shows all products, Later will show popular
    }
  );

  return (
    <>
      {!filteredProducts?.length ? (
        <EmptySection />
      ) : (
        <FlatList
          data={filteredProducts}
          keyExtractor={(_, index) => `${index}`}
          renderItem={({ item, index }) => {
            const isSingleItem =
              index % 2 === 0 && index === filteredProducts?.length - 1;
            return (
              <HomeScreenProductCard
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                isSingleItem={isSingleItem}
              />
            );
          }}
          columnWrapperStyle={homeScreenStyles.productsContainer}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      )}
    </>
  );
};

export default HomeScreenProductSection;
