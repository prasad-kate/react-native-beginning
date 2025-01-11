import { useGetFavrouriteProductsDetails } from "@/services/products.service";
import { favouriteScreenStyles } from "@/styles/favouriteScreen.styles";
import { ActivityIndicator, FlatList, View } from "react-native";
import Button from "../ui/Button";
import FavouriteProductCard from "./FavouriteProductCard";

const FavouriteProductsSections = () => {
  const { favouriteProductDetails, isAnyPending } =
    useGetFavrouriteProductsDetails();

  return (
    <View style={favouriteScreenStyles.sectionContainer}>
      {isAnyPending ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <FlatList
          data={favouriteProductDetails}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => {
            const { name, price, image, id } = item;
            return (
              <FavouriteProductCard
                id={id}
                name={name}
                image={image}
                price={price}
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
      />
    </View>
  );
};

export default FavouriteProductsSections;
