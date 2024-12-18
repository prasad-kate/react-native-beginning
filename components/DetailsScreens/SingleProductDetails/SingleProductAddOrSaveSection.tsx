import Button from "@/components/ui/Button";
import useCartStore from "@/store/cartStore";
import useProductStore from "@/store/productStore";
import { singleProductScreenStyles } from "@/styles/singleProductScreen.styles";
import { SingleProductAddOrSaveSectionProps } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { TouchableOpacity, View } from "react-native";

const SingleProductAddOrSaveSection = ({
  productCount,
  productName,
}: SingleProductAddOrSaveSectionProps) => {
  const { id } = useLocalSearchParams();
  const { cartItems, setCartItems } = useCartStore();
  const { editFavouriteProducts, favouriteProducts } = useProductStore();

  const isItemAddedToCart = cartItems?.some(
    (itemData) => itemData?.productId === +id
  );

  const isItemAddedToFavourites = favouriteProducts?.includes(+id);

  return (
    <View style={singleProductScreenStyles.addToCartOrFavouritesContainer}>
      <TouchableOpacity
        activeOpacity={0.9}
        style={singleProductScreenStyles.addToFavouritesButtonContainer}
        onPress={() => {
          editFavouriteProducts(+id);
        }}
      >
        <Ionicons
          size={24}
          name={isItemAddedToFavourites ? "bookmark" : "bookmark-outline"}
        />
      </TouchableOpacity>
      <Button
        text={isItemAddedToCart ? "Added To Cart" : "Add To Cart"}
        style={[
          singleProductScreenStyles.addToCartButton,
          {
            opacity: isItemAddedToCart ? 0.5 : 1,
          },
        ]}
        onPress={() => {
          setCartItems({
            productId: +id,
            productCount,
            productName,
          });
        }}
        disabled={isItemAddedToCart}
      />
    </View>
  );
};

export default SingleProductAddOrSaveSection;
