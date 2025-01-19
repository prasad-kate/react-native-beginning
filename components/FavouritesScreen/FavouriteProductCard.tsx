import useCartStore from "@/store/cartStore";
import useProductStore from "@/store/productStore";
import { favouriteScreenStyles } from "@/styles/favouriteScreen.styles";
import { FavouriteScreenProductCardProps } from "@/types";
import { formatPrice } from "@/utils";
import { Ionicons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

const FavouriteProductCard = ({
  name,
  image,
  price,
  id,
}: FavouriteScreenProductCardProps) => {
  const { cartItems, addCartItem } = useCartStore();
  const { editFavouriteProducts } = useProductStore();

  const isProductAddedToCart = cartItems?.some(
    (itemData) => itemData?.productId === id
  );

  return (
    <View style={favouriteScreenStyles.cardContainer}>
      {/* product details */}
      <View style={favouriteScreenStyles.productDetailsContainer}>
        <Image source={image} style={favouriteScreenStyles.productImage} />
        <View>
          <Text style={favouriteScreenStyles.productName}>{name}</Text>
          <Text style={favouriteScreenStyles.productPrice}>
            {formatPrice(+price)}
          </Text>
        </View>
      </View>

      {/* prduct actions */}
      <TouchableOpacity
        activeOpacity={0.6}
        style={favouriteScreenStyles.cancelButtonContainer}
        onPress={() => {
          editFavouriteProducts(id);
        }}
      >
        <Ionicons name="close" size={20} color="black" />
      </TouchableOpacity>
      {!isProductAddedToCart && (
        <TouchableOpacity
          activeOpacity={0.6}
          style={favouriteScreenStyles.shoppingBagIconContainer}
          onPress={() => {
            addCartItem({
              productId: id,
              productCount: 1,
              productName: name,
            });
          }}
        >
          <Image
            source={require("@/assets/images/shopping-bag-icon-black.png")}
            style={favouriteScreenStyles.shoppingBagIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default FavouriteProductCard;
