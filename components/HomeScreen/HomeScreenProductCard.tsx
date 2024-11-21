import { homeScreenStyles } from "@/styles/homeScreen.styles";
import { HomeScreenProductCardProps } from "@/types";
import { formatPrice } from "@/utils";
import { useRouter } from "expo-router";
import { Image, ImageBackground, Text, TouchableOpacity } from "react-native";

const HomeScreenProductCard = ({
  name,
  image,
  price,
  isSingleItem,
}: HomeScreenProductCardProps) => {
  const router = useRouter();
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
        router.push(`/singleProductScreen?id=${name}`);
      }}
    >
      <ImageBackground
        source={image}
        style={homeScreenStyles.productCardImage}
        resizeMode="cover"
      >
        <Image
          source={require("@/assets/images/shopping-bag-icon.png")}
          style={homeScreenStyles.shoppingCartIcon}
        />
      </ImageBackground>
      <Text style={homeScreenStyles.productName}>{name}</Text>
      <Text style={homeScreenStyles.productPrice}>{formatPrice(+price)}</Text>
    </TouchableOpacity>
  );
};

export default HomeScreenProductCard;
