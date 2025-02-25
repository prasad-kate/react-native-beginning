import { useGetFavrouriteProductsDetails } from "@/services/products.service";
import useCartStore from "@/store/cartStore";
import { useGlobalSearchStore } from "@/store/globalSearchStore";
import { favouriteScreenStyles } from "@/styles/favouriteScreen.styles";
import { useMemo } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import OrderDetailsEmptySection from "../DetailsScreens/OrderDetails/OrderDetailsEmptySection";
import Button from "../ui/Button";
import FavouriteProductCard from "./FavouriteProductCard";

const FavouriteProductsSections = () => {
  const { addMultipleCartItems } = useCartStore();
  const { globalSearch } = useGlobalSearchStore();

  const { favouriteProductDetails, isAnyPending } =
    useGetFavrouriteProductsDetails();

  const addAllProductsToCartPayload = favouriteProductDetails?.map(
    (details) => ({
      productId: details?.id,
      productCount: 1,
      productName: details?.name,
    })
  );

  const filteredFavouriteProducts = useMemo(() => {
    return favouriteProductDetails?.filter(({ name }: { name: string }) => {
      const matchesSearch = globalSearch
        ? name?.toLowerCase().includes(globalSearch?.toLowerCase())
        : true;

      return matchesSearch;
    });
  }, [globalSearch, favouriteProductDetails]);

  return (
    <View style={favouriteScreenStyles.sectionContainer}>
      {isAnyPending ? (
        <ActivityIndicator size={"large"} />
      ) : favouriteProductDetails?.length ? (
        <>
          <FlatList
            data={filteredFavouriteProducts}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => {
              return (
                <FavouriteProductCard
                  id={item?.id}
                  name={item?.name}
                  image={item?.image}
                  price={item?.price}
                />
              );
            }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={favouriteScreenStyles.productsContainer}
          />

          <Button
            text="Add all to cart"
            activeOpacity={0.9}
            disabled={isAnyPending}
            style={[
              favouriteScreenStyles.addAllToCartButton,
              {
                opacity: isAnyPending ? 0.5 : 1,
              },
            ]}
            onPress={() => {
              addMultipleCartItems(addAllProductsToCartPayload);
            }}
          />
        </>
      ) : (
        <OrderDetailsEmptySection />
      )}
    </View>
  );
};

export default FavouriteProductsSections;
