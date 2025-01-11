import { useGetFavrouriteProductsDetails } from "@/services/products.service";
import useCartStore from "@/store/cartStore";
import { favouriteScreenStyles } from "@/styles/favouriteScreen.styles";
import { ActivityIndicator, FlatList, View } from "react-native";
import Button from "../ui/Button";
import FavouriteProductCard from "./FavouriteProductCard";

const FavouriteProductsSections = () => {
  const { addMultipleCartItems } = useCartStore();
  const { favouriteProductDetails, isAnyPending } =
    useGetFavrouriteProductsDetails();

  const addAllProductsToCartPayload = favouriteProductDetails?.map(
    (details) => ({
      productId: details?.id,
      productCount: 1,
      productName: details?.name,
    })
  );

  return (
    <View style={favouriteScreenStyles.sectionContainer}>
      {isAnyPending ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <FlatList
          data={favouriteProductDetails}
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
      )}
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
    </View>
  );
};

export default FavouriteProductsSections;
