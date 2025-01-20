import useProductStore from "@/store/productStore";
import { homeScreenStyles } from "@/styles/homeScreen.styles";
import { HomeScreenProductCardProps } from "@/types";
import { formatPrice } from "@/utils";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ImageBackground, Text, TouchableOpacity } from "react-native";

const HomeScreenProductCard = ({
  id,
  name,
  image,
  price,
  isSingleItem,
}: HomeScreenProductCardProps) => {
  const router = useRouter();
  const { favouriteProducts, editFavouriteProducts } = useProductStore();

  const isItemAddedToFavourites = favouriteProducts?.includes(+id);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[
        homeScreenStyles.productCardContainer,
        {
          flex: isSingleItem ? 0.5 : 1,
          marginRight: isSingleItem ? 20 : 0,
        },
      ]}
      onPress={() => {
        router.push(`/singleProductScreen?id=${id}`);
      }}
    >
      <ImageBackground
        source={{ uri: image as string }}
        style={homeScreenStyles.productCardImage}
        resizeMode="cover"
      >
        <TouchableOpacity
          activeOpacity={0.9}
          style={homeScreenStyles.addToFavoritesContainer}
          onPress={(e) => {
            e.stopPropagation();
            editFavouriteProducts(id);
          }}
        >
          <Ionicons
            size={18}
            name={isItemAddedToFavourites ? "bookmark" : "bookmark-outline"}
            color={"white"}
          />
        </TouchableOpacity>
      </ImageBackground>
      <Text style={homeScreenStyles.productName}>{name}</Text>
      <Text style={homeScreenStyles.productPrice}>{formatPrice(+price)}</Text>
    </TouchableOpacity>
  );
};

export default HomeScreenProductCard;
