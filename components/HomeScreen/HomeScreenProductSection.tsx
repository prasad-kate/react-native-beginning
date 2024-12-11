import { useGetProducts } from "@/services/products.service";
import { homeScreenStyles } from "@/styles/homeScreen.styles";
import { FlatList } from "react-native";
import EmptySection from "../DetailsScreens/OrderDetails/OrderDetailsEmptySection";
import HomeScreenProductCard from "./HomeScreenProductCard";

const HomeScreenProductSection = () => {
  const { productsList } = useGetProducts();
  return (
    <>
      {!productsList?.length ? (
        <EmptySection />
      ) : (
        <FlatList
          data={productsList}
          keyExtractor={(_, index) => `${index}`}
          renderItem={({ item, index }) => {
            const isSingleItem =
              index % 2 === 0 && index === productsList?.length - 1;
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
